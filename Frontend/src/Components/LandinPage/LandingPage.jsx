import React from 'react'
import './LandingPage.css'
import LandinPage from "../../../public/Images/landingPageImage.png"

export default function LandingPage() {
  return (
    <div className='LandingPage'>
      <div className='LandingPage-left'>
        <p className='LandingPage-left-line1'>Halal Products <span> Online Delivery Shop</span></p>
        <p className='LandingPage-left-line2'>Make Healthy Life with <span> Fresh </span> Grocery</p>
        <p className='LandingPage-left-line3'>This year , our new summer collection will shelter you harsh elements of a world that.</p>
        <button className='LandingPage-left-btn'> Shop Now</button>
      </div>
      <div className='LandingPage-right'>
        <img className='LandingPage-Img' src={LandinPage} alt="LandingPage-Img" />
        <div className='LandingPage-Imagebackground'></div>
      </div>
    </div>
  )
}
