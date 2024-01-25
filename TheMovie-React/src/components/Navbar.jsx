import React from 'react';
import MovieFilterSharpIcon from '@mui/icons-material/MovieFilterSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchWord } from '../redux/services/movieSlice';
import SubscriptionsSharpIcon from '@mui/icons-material/SubscriptionsSharp';


const Navbar = () => {
  const nav = useNavigate();

  const searchWord = useSelector(state => state.movie.searchWord);
  const favMovies = useSelector(state => state.movie.favMovies);
  const dispatch = useDispatch();
  
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(searchWord);
    nav(`/search/${searchWord}`)
    dispatch(setSearchWord(''));
   
  }

  return (
    <nav>
      <div className='flex items-center justify-between px-12 py-5 bg-[#385E72] text-[#D9E4EC]'>
        <Link to={'/'}>
          <h1 className='text-3xl font-bold font-mono tracking-wider '>
            <span className='w-6 h-6 me-2'>
              <MovieFilterSharpIcon />
            </span>
            HelloMovie
          </h1>
        </Link>

        <div className='flex items-center space-x-4'>
          <NavLink to={'/'} className={({ isActive }) => isActive ? 'active-link' : 'non-active-link'}>
            <button>Popular</button>
          </NavLink>
          <NavLink to={'/upcoming'} className={({ isActive }) => isActive ? 'active-link' : 'non-active-link'}>
            <button>Upcoming</button>
          </NavLink>
          <div className='relative'>
            <form action="" onSubmit={submitHandler}>
              <SearchSharpIcon className='absolute top-1 left-3' />
              <input
                type="text"
                value={searchWord}
                onChange={(e) => {
                  dispatch(setSearchWord(e.target.value))
                }}
                className='text-xl bg-transparent border-2 focus:outline-none px-10 w-60'
              />
              <button type='submit'></button>
            </form>
          </div>
          <Link to={'/favorite'}>
          <div className='relative flex items-center'>
          <span><SubscriptionsSharpIcon /></span>
          <div className="sub-count">
          {favMovies.length}
        </div>
          </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
