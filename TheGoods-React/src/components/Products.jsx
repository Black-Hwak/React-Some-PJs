import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import Loading from './Loading';
import { Loader } from '@mantine/core';


const Products = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    },[])
    const fetchProducts = async ()=>{
      try {
        setIsLoading(true);
        const response = await fetch('https://dummyjson.com/products');
        const { products } = await response.json();
        setProducts(products);
        setIsLoading(false);
    } catch (error) {
        console.error('Error fetching products:', error);
        setIsLoading(false);
    }
    }
   
     if(isLoading){
      return (<Loading/>)
    }
  return (
    <div className='flex flex-wrap justify-center items-center gap-10 mx-auto container mt-20'>
      {products.map(product =>{
        return(
            <ProductCard key={product.id} {...product}/>
          
        )
      })}
    </div>
  )
}

export default Products
