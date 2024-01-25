import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetSearchMovieQuery } from '../redux/api/movieApi';
import MovieCard from '../components/MovieCard';

const Search = () => {
    const {title} = useParams();

    const {data : searchMovies} = useGetSearchMovieQuery({title});
  return (
    <>
     <div className='px-10 my-8'>
      <h1 className='text-2xl text-mono font-bold text-white ribbon'>Search Result With : `{title}`</h1>
      <div className='grid grid-cols-5 gap-5 my-5'>
            {searchMovies?.results?.length && searchMovies?.results?.map((movie) => {
                return <MovieCard key={movie.id} movie={movie}/>
            })}
      </div>
    </div>
    </>
  )
}

export default Search
