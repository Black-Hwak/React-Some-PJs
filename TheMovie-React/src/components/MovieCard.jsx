import React, { useEffect, useState } from 'react'
import PlayArrowSharpIcon from '@mui/icons-material/PlayArrowSharp';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addFavMovie, removeFavMovie } from '../redux/services/movieSlice';


const MovieCard = ({movie}) => {
  const [activeFav, setActiveFav] = useState(false);

  const dispatch = useDispatch();

  const toggleFavorite = () => {
   
    setActiveFav(!activeFav);
    if(!activeFav){
      dispatch(addFavMovie(movie))
    }else{
      dispatch(removeFavMovie(movie))
    }
  };

  useEffect(() => {
    if(location.pathname == '/favorite'){
      setActiveFav(!activeFav);
    }
  },[])

  
  return (
    <div className='relative'>
    <Link to={`/details/${movie.id}`}>
    <div className='flex items-center justify-center  relative card-container '>
      <img className='rounded-md h-auto object-cover' src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt='' />
      <span className='playIcon-container'>
      <PlayArrowSharpIcon className='text-[#6AABD2]' style={{ fontSize: '5rem' }} />
      </span>
    </div>
    </Link>
    <button className='favorite-container' onClick={toggleFavorite}>
          {activeFav ? (
            <FavoriteSharpIcon className='text-[#6AABD2] added' style={{ fontSize: '1.5rem' }} />
          ) : (
            <FavoriteBorderSharpIcon className='text-[#6AABD2]' style={{ fontSize: '1.5rem' }} />
          )}
      </button>
    </div>
    
    
  )
}

export default MovieCard
