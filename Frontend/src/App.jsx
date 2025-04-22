import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './Components/LandinPage/LandingPage'
import Navbar from './Components/Navbar/Navbar'

export default function App() {
  return (
    <>
    
    <BrowserRouter>
     {/* <Navbar/> */}
      <Routes>

        < Route path='/' element={<LandingPage/>}/>
        
      </Routes>
    
    </BrowserRouter>
   
    
    </>
  )
}
