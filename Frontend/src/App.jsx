import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './Components/LandinPage/LandingPage'
import Navbar from './Components/Navbar/Navbar'
import NewArrival from './Components/NewArrival/NewArrival'
import Footer from './Components/Footer/Footer'

export default function App() {
  return (
    <>
    
    <BrowserRouter>
     <Navbar/>
      <Routes>

        {/* < Route path='/' element={<LandingPage/>}/> */}
        <Route path='/newArrival' element={<NewArrival/>}/>
        
      </Routes>
    < Footer/>
    </BrowserRouter>
   
    
    </>
  )
}
