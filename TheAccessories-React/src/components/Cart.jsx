import React, { useState } from 'react'
import { useCustomStateContext } from '../context/StateContext';

const Cart = ({id, title, image, price, increaseTotal, decreaseTotal}) => {
    const [quantity, setQuantity] = useState(1);

    const {dispatch} = useCustomStateContext();

    const increaseQty = () => {
        setQuantity(quantity+1);
        increaseTotal(price);
    }

    const decreaseQty = () => {
       if(quantity>1){
        setQuantity(quantity-1);
        decreaseTotal(price);
       }
    }

    const itemPrice = price * quantity;
  return (
    <div className='flex justify-around mb-4'>
      <div className='flex gap-7 items-center'>
        <img src={image} alt="" className='max-w-[100px] h-[100px]' />
        <div>
        <p>{title}</p>
        <p>{itemPrice.toFixed(2)}</p>
        <p className='text-red-500 cursor-pointer' onClick={() => {
            dispatch({type: "REMOVE", payload:id})
        }}>Remove</p>
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <p className='cursor-pointer select-none' onClick={increaseQty}>+</p>
        <p>{quantity}</p>
        <p className='cursor-pointer select-none' onClick={decreaseQty}>-</p>
      </div>
    </div>
  )
}

export default Cart
