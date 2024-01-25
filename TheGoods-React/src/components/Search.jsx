import React from 'react'
import { useLocation } from 'react-router-dom'
import SearchProductCard from './SearchProductCard';

const Search = () => {
    const location = useLocation();
    const filteredProducts = location.state.filteredProducts;


    console.log(filteredProducts)
  return (
    <div className='flex flex-wrap justify-center items-center gap-10 mx-auto container mt-20'>
      {filteredProducts?.map(product =>{
       return (
        <SearchProductCard key={product.id} {...product}/>
       )
      })}
    </div>
  )
}

export default Search
