import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { reducer } from "./reducer";


const StateContext = createContext();

export const StateContextProvider = ({children}) => {
    const [productList, setProductList] = useState([]);
    const [search,setSearch] = useState('');
    const [filteredCategory, setFilteredCategory] = useState([]);

    const categories = [...new Set(productList.map((product) => product.category))];

    useEffect(() => {
        fetchData()
    },[]);

    const filteredProducts = productList.filter(item => item.title.toLowerCase().includes(search));
    useEffect(() => {
        dispatch({type: "GET_PRODUCT", payload:productList});
        dispatch({type: "GET_PRODUCT", payload: filteredProducts});
    },[productList, search]);

    const fetchData = async () => {
        try {
          const api = await fetch('https://fakestoreapi.com/products'); 
          if (!api.ok) {
            throw new Error(`Failed to fetch: ${api.status} ${api.statusText}`);
          }
          const data = await api.json();
          setProductList(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      
      

    const initialState ={
        products:[],
        carts: []
    };

   

    const [state,dispatch] = useReducer(reducer, initialState);

    const data = {state,dispatch, search, setSearch, categories, filteredCategory, setFilteredCategory}
    return(
        <StateContext.Provider value={data}>
            {children}
        </StateContext.Provider>
    )
}

export const useCustomStateContext = () => {
     return useContext(StateContext);
}
