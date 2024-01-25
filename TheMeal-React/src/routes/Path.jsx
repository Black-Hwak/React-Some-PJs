import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MenuContainer from '../pages/MenuContainer'
import MenuDetail from '../pages/MenuDetail'
import Navbar from '../components/Navbar'

const Path = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navbar/>}></Route>
        <Route path='/detail/:idMeal' element={<MenuDetail/>}></Route>

      </Routes>
    </div>
  )
}

export default Path
