import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'


import HomeMian from './Components/Home/HomeMain/HomeMian'
import './App.css'



export default function App() {
  return (
    <>
    
    <BrowserRouter>
     <Navbar/>
      <Routes>

        < Route path='/' element={<HomeMian/>}/>
        
        
      </Routes>
    
    </BrowserRouter>
   
    
    </>
  )
}
