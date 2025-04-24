import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'

import Footer from './Components/Footer/Footer'


import HomeMian from './Components/Home/HomeMain/HomeMian'
import './App.css'
import Login from './Components/Login/Login'
import ProductList from './Components/ProductList/ProductList'
import BuyingPage from './Components/BuyingPage/BuyingPage'



export default function App() {
  return (
    <>
    
    <BrowserRouter>
     <Navbar/>
      <Routes>

        {/* < Route path='/' element={<HomeMian/>}/> */}
        {/* <Route path='/Login' element={<Login/>} /> */}
        {/* <Route path='/productlist' element={<ProductList/>}/> */}
        <Route path='/buyingpage' element={<BuyingPage/>}/>
        
        
      </Routes>
    {/* < Footer/> */}
    </BrowserRouter>
   
    
    </>
  )
}
