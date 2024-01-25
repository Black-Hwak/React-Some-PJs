import React from 'react'
import MovieContainer from './MovieContainer'
import { useSelector } from 'react-redux';

const FavoriteMovies = () => {
    const favMovies = useSelector(state => state.movie.favMovies);
    console.log(favMovies)
  return (
    <div>
      <MovieContainer title={"Favorite Lists"} movies={favMovies}/>
    </div>
  )
}

export default FavoriteMovies
