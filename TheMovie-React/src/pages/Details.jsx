import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetSingleMovieQuery } from '../redux/api/movieApi';
import PlayCircleSharpIcon from '@mui/icons-material/PlayCircleSharp';

const Details = () => {
    const {id} = useParams();

    const {data : singleMovie} = useGetSingleMovieQuery({id});
    
  return (
    <div>
        {singleMovie && (
            <div className='relative'>
                <div className='relative'>
                    <img className='w-10/12 h-[350px] object-center mx-auto' src={`https://image.tmdb.org/t/p/original/${singleMovie.backdrop_path}`} alt="" />
                    <div className='dark-over'></div>
                </div>
                <div className='detail-container'>
                
                   <img className='w-52 h-auto rounded-md' src={`https://image.tmdb.org/t/p/original/${singleMovie.poster_path}`} alt="" />
                    <div className='ms-3 text-white'>
                        <h2 className='text-2xl font-semibold mb-2'>{singleMovie.original_title}</h2>
                        <div className='leading-5 text-sm '>
                            <span className='text-red-500 font-medium'>Release Date : </span>{singleMovie.release_date}
                            <br />
                            <span className='text-red-500 font-medium'>Runtime : </span>{singleMovie.runtime} min
                        </div>
                       <div className='my-3'>
                       Genres: {singleMovie.genres?.map((genre)=>{
                           return <span key={genre.id} className='bg-red-500 p-1 ps-2 rounded-lg mx-1 text-center text-sm'>{genre.name} &nbsp;</span>
                        })} 
                       </div>
                        
                        <p className='text-sm text-justify'>{singleMovie.overview}</p>
                       
                        <Link to={singleMovie.homepage}> 
                        <button className='border-2 border-[#6AABD2] text-[#D9E4EC] px-3 py-2 rounded-md font-medium text-lg mt-4'>
                        <PlayCircleSharpIcon className='me-1 -mt-1 text-red-500'/>
                        Watch Now
                        </button>
                        </Link>
                    </div>
                   
                </div>
            </div>    
        )}
       <div className='mt-96'></div>
    </div>
  )
}

export default Details
