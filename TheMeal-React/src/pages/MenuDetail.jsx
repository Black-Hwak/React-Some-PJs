import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetSingleMenuQuery } from '../redux/api/menuApi';
import YoutubeSearchedForSharpIcon from '@mui/icons-material/YoutubeSearchedForSharp';


const MenuDetail = () => {
    const {idMeal} = useParams();
   
    const {data} = useGetSingleMenuQuery({idMeal});
    const detailMenu = data?.meals;
    console.log(detailMenu)

    let ingredients = [];
    if (detailMenu && detailMenu[0]) {
        ingredients = Object.entries(detailMenu[0])
          .filter(([key, value]) => key.startsWith('strIngredient') && value !== "")
          .map(([key, value]) => value);
        
      } 
  return (
    <div>
        {detailMenu && (
            <>
          <Link to={'/'}>
          <button className=' px-2 py-1 text-xl'>{'< '}Back</button>
          </Link>
            <div className='my-4 grid grid-cols-2 gap-6 text-center' >
                <div className='relative'>
                    <p className='text-2xl font-bold my-5'>
                        {detailMenu[0]?.strMeal} 
                        &nbsp; - &nbsp;
                        <span className='text-[#361d32] bg-[#edd2cb] border py-1 px-2 text-sm rounded-lg'>
                        {detailMenu[0]?.strCategory}
                        </span>
                    </p>
                    <Link to={detailMenu[0]?.strSource}>
                    <div className='detail-img mb-3 cursor-pointer w-2/3 inline-block'>
                        <img
                            src={detailMenu[0]?.strMealThumb}
                            alt=""
                            className='hover:brightness-50 relative overflow-hidden z-10 duration-500  scale-100 hover:scale-105'
                        />
                    <span className='detail-search z-20'>
                    <YoutubeSearchedForSharpIcon style={{ fontSize: '3.5rem' }} />
                    </span>
                    </div>
                    </Link>
                   <br />
                   <div>
                   <Link to={detailMenu[0]?.strYoutube}>
                        <img className='w-20 h-10 inline-block my-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXGCLX8Hh7lqo6gpXpMMrCSZQHFOC_ETmKTQ&usqp=CAU" alt="" />
                    </Link>
                   </div>
            </div>

                <div>
                <p className='text-2xl font-bold my-5'>Ingredients</p>
                <ol className='text-left leading-loose'>
                {ingredients.map((ingredient, index) => (
                <li key={index}>{`${index + 1}. ${ingredient}`}</li>
                ))}
                </ol>
                </div>
            </div>
            <div>
                <h3 className='text-2xl font-semibold border-b-2 inline-block border-[#f55951] pb-1 '>Instructions</h3>
                {detailMenu[0]?.strInstructions.split('.').map((sentence, index, array) => (
                <p key={index} className='my-2 text-justify'>
                  {index === array.length - 1 ? sentence.trim() : sentence.trim() + '.'}
                </p>
                ))}
            </div>
            </>
        )}
       
    </div>
  )
}

export default MenuDetail
