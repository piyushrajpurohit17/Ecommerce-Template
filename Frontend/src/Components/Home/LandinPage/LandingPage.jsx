import React from 'react'
import './LandingPage.css'

export default function LandingPage() {
  return (
    <>
    
      <section className="">

      <div className="    ">
                <img src="/Images/background.png" alt="" className="slanted-background w-2/6 h-8/9 absolute right-0 -z-10" />
            </div>
        
        <div className="flex flex-col justify-center h-[80vh]">
        <div className='LandingPage'>
      
      <div className='LandingPage-left'>
        <p className='LandingPage-left-line1 '>Halal Products <span> Online Delivery Shop</span></p>
        <p className='LandingPage-left-line2 '>Make Healthy Life with <span> Fresh </span> Grocery</p>
        <p className='LandingPage-left-line3'>This year , our new summer collection will shelter you harsh elements of a world that.</p>
        <button className='LandingPage-left-btn'> Shop Now</button>
      </div>
      <div className='LandingPage-right'>
        <img className='LandingPage-Img' src='/Images/landingPageImage.png' alt="LandingPage-Img" />
        <div className='LandingPage-Imagebackground'></div>
      </div>
    </div>
        </div>
      </section>
    
    
    </>
  )
}
