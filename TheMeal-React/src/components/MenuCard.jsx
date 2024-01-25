import React from 'react'
import { Link } from 'react-router-dom'

const MenuCard = ({meal}) => {
  
  return (
    <div className='my-4'>
          <Link to={`/detail/${meal.idMeal}`}>
          <img className=' mb-3 cursor-pointer hover:scale-90 duration-100 rounded-md' src={meal.strMealThumb} alt="apk" />
          </Link>
          <p>{meal?.strMeal}</p>
       
    </div>
  )
}

export default MenuCard
