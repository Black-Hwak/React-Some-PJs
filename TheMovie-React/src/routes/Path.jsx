import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../pages/Header'
import UpComing from '../pages/UpComing'
import MovieContainer from '../pages/MovieContainer'
import Navbar from '../components/Navbar'
import Popular from '../pages/Popular'
import Details from '../pages/Details'
import Search from '../pages/Search'
import FavoriteMovies from '../pages/FavoriteMovies'
import Error404 from '../components/Error404'

const Path = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Popular/>}></Route>
        <Route path='/upcoming' element={<UpComing/>}></Route>
        <Route path='/details/:id' element={<Details/>}></Route>
        <Route path='/search/:title' element={<Search/>}></Route>
        <Route path='/favorite' element={<FavoriteMovies/>}></Route>
        <Route path='*' element={<Error404/>}></Route>
      </Routes>
    </div>
  )
}

export default Path
