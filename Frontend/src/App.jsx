import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import NewArrival from './Components/NewArrival/NewArrival'


import HomeMian from './Components/Home/HomeMain/HomeMian'
import './App.css'



export default function App() {
  return (
    <>
    
    <BrowserRouter>
     <Navbar/>
      <Routes>

        < Route path='/' element={<LandingPage/>}/>
        <Route path='/newArrival' element={<NewArrival/>}/>
        
      </Routes>
    
    </BrowserRouter>
   
    
    </>
  )
}
