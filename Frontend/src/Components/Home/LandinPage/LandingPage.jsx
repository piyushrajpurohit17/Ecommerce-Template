import React from 'react';
import './LandingPage.css';

export default function LandingPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        {/* Background Image */}
        <div className="hidden md:block">
          <img
            src="/Images/background.png"
            alt="Background"
            className="slanted-background w-2/6 h-full absolute right-0 top-0 -z-10 object-cover"
          />
        </div>

        {/* Main Content */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between h-[80vh] px-4 md:px-16">
          {/* Left Side */}
          <div className='LandingPage-left text-center md:text-left max-w-xl'>
            <p className='LandingPage-left-line1 text-2xl md:text-3xl lg:text-4xl font-semibold mb-4'>
              Halal Products <span className='text-yellow-500'>Online Delivery Shop</span>
            </p>
            <p className='LandingPage-left-line2 text-xl md:text-2xl mb-2'>
              Make Healthy Life with <span className='text-green-600'>Fresh</span> Grocery
            </p>
            <p className='LandingPage-left-line3 text-gray-600 mb-6'>
              This year, our new summer collection will shelter you from the harsh elements of a world that.
            </p>
            <button className='LandingPage-left-btn bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-md transition duration-300'>
              Shop Now
            </button>
          </div>

          {/* Right Side */}
          <div className='LandingPage-right w-full md:w-1/2 mb-8 md:mb-0 flex justify-center'>
            <img
              className='LandingPage-Img max-w-xs md:max-w-md lg:max-w-lg'
              src='/Images/landingPageImage.png'
              alt="LandingPage"
            />
          </div>
        </div>
      </section>
    </>
  );
}
