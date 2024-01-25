import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Accessories from './components/Accessories'
import Navbar from './components/Navbar'
import AddCart from './components/Addcart'
import Categories from './components/Categories'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Categories/>
      <Routes>
        <Route path='/' element={<Accessories/>}/>
        <Route path='/addtocart' element={<AddCart/>}/>

      </Routes>
    </div>
  )
}

export default App
