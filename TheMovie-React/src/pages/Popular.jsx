import React from 'react'
import Header from './Header'
import MovieContainer from './MovieContainer'
import { useGetPopularQuery } from '../redux/api/movieApi';

const Popular = () => {
  const {data : popularMovies} = useGetPopularQuery();
  // const popularMovies = data.results;
 
  return (
    <div>
      <Header/>
      <MovieContainer title={"What's Popular"} movies={popularMovies?.results}/>
    </div>
  )
}

export default Popular
