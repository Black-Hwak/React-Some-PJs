import React from 'react'
import MenuCard from './../components/MenuCard';
import { useGetAllMenusQuery } from '../redux/api/menuApi';

const MenuContainer = ({searchWord}) => {
    const {data : meals} = useGetAllMenusQuery();
  let filteredMenus =[];
  if(searchWord!= ''){
    filteredMenus = meals?.meals?.filter((meal) =>
    meal.strMeal && meal.strMeal.toLowerCase().includes(searchWord)
  );
  }else{
    filteredMenus = meals?.meals;
  }

  return (
    <div className='text-center mt-10'>
     <h2 className='text-2xl'>
    <span className='border-b-2 border-[#543c52] pb-2'>Our Top Choice Menus</span>
    </h2>
    <div className='grid grid-cols-4 gap-5 items-center mt-6'>
    {filteredMenus?.length ? (
          filteredMenus.map((meal) => (
            <MenuCard key={meal.idMeal} meal={meal} />
          ))
        ) : (
          <p className='text-xl text-center'>No matching menus found</p>
        )}
    </div>
    
    </div>
  )
}

export default MenuContainer
