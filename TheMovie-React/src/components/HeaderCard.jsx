import React from 'react'
import PlayCircleSharpIcon from '@mui/icons-material/PlayCircleSharp';
import { Link } from 'react-router-dom';

const HeaderCard = ({movie}) => {
  return (
    <div className=''>
     
        <img className='w-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="" />
            <div className='dark-over'></div>
            <div className='absolute z-20 text-white left-11 bottom-2/4 w-2/6 opacity-90'>
                <h1 className='text-4xl font-extrabold'>{movie.original_title}</h1>
                <p className='my-3'>{movie.overview}</p>
               <Link to={`/details/${movie.id}`}>
               <button className='bg-white text-[#6AABD2] px-3 py-2 rounded-md font-medium text-lg mt-2'>
                    <span><PlayCircleSharpIcon className='me-1 -mt-1'/></span>
                    Watch Now
                </button>
               </Link>
            </div>
    </div>
  )
}

export default HeaderCard
