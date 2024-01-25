import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie';


const initialState = {
    cartItems:[],
    totalAmount: 0,
    quantity: 0
};

const STORE_COOKIE = 'cartItems';

const storedItems = Cookies.get(STORE_COOKIE);

if(storedItems){
    initialState.cartItems = JSON.parse(storedItems);
    initialState.totalAmount = calculateTotalAmount(initialState.cartItems);
    initialState.quantity = calculateQuantity(initialState.cartItems);
};

function calculateTotalAmount (cartItems){
    return cartItems.reduce((total, item) => total + item.price, 0);
};

function calculateQuantity (cartItems){
    return cartItems.reduce((total, item) => total + item.quantity, 0);
};
    

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, {payload}) => {
            const isCartExisted = state.cartItems.find(item => item.id  === payload.id);
            if(isCartExisted){
                return state;
            }else{
                state.cartItems = [...state.cartItems,{...payload,quantity : 1}]
                state.quantity += calculateQuantity(state.cartItems);
                state.totalAmount += calculateTotalAmount(state.cartItems);
                Cookies.set(STORE_COOKIE, JSON.stringify(state.cartItems));
            }
          
        },
        removeFromCart: (state, {payload}) =>{
            state.cartItems = state.cartItems.filter(item => item.id !==payload.id)
            state.quantity-= payload.quantity;
            state.totalAmount -= payload.price * payload.quantity;
           
        },
        addItemsQuantity: (state,{payload})=>{
            state.cartItems = state.cartItems.map((item) => {
               if(item.id === payload.id){
                return {...item, quantity : item.quantity + 1};
               }else{
                return item;
               }
            });
            state.quantity++;
            state.totalAmount += payload.price;
        },
        subtractItemsQuantity: (state,{payload})=>{
            state.cartItems = state.cartItems.map((item) => {
                if(item.id === payload.id){
                    return {...item, quantity: item.quantity - 1};
                }else{
                    return item;
                }
            });
            state.quantity--;
            state.totalAmount -= payload.price;
        }
    }
});

export const {addToCart, removeFromCart, addItemsQuantity, subtractItemsQuantity} = cartSlice.actions
export default cartSlice.reducer