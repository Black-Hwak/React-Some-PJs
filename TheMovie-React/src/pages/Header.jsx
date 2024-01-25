import React, { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import HeaderCard from './../components/HeaderCard';
import { useGetAllRelatedQuery } from '../redux/api/movieApi';
import Loading from '../components/Loading';

const Header = () => {

    const {data : relatedMovies, isLoading} = useGetAllRelatedQuery();


    if(isLoading){
        return <Loading />
    }
    // const relatedMovies = data.results;
    // console.log(relatedMovies);

    // useEffect(() => {
    //     getRelatedMovies()
    // },[])

    // const getRelatedMovies = async ()=>{
    //     const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=09a0f21649f8ae89850e3f01aea9e49f&language=en-US');
    //     const data = await response.json();
    //     console.log(data)
    // }
  return (
    <>
        <div className='w-full relative'>
            <Splide options={{
                 type: 'loop',
                 autoplay: true,
                 interval: 3000
               
            }}>
                {relatedMovies?.results?.map((movie) =>{
                    return(
                        <SplideSlide key={movie.id}>
                        <HeaderCard  movie={movie}/>
                        </SplideSlide>
                    )
                })}
            </Splide>
           
        </div>
    </>
  )
}

export default Header
