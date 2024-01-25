import React from 'react'
import MovieCard from '../components/MovieCard';
import { useGetPopularQuery } from '../redux/api/movieApi';
import Header from './Header';

const MovieContainer = ({title, movies}) => {
 
  return (
    <>
    <div className='px-10 my-8'>
      <h1 className='text-2xl text-mono font-bold text-white ribbon'>{title}</h1>
      <div className='grid grid-cols-5 gap-5 my-5'>
        {movies?.map((movie) =>{
          return(
            <MovieCard key={movie.id} movie={movie}/>
          )
        })}

      </div>
    </div>
    </>
  )
}

export default MovieContainer
