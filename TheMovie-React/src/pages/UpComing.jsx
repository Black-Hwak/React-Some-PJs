import React from 'react'
import MovieContainer from './MovieContainer';
import Header from './Header';
import { useGetUpcomingQuery } from '../redux/api/movieApi';

const UpComing = () => {
  const {data : upcomingMovies} = useGetUpcomingQuery();
 console.log(upcomingMovies)
  return (
    <div>
        <Header/>
        <MovieContainer title={"Upcoming"} movies={upcomingMovies?.results}/>
    </div>
  )
}

export default UpComing
