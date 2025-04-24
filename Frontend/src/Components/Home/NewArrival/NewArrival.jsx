import React from 'react'
import './NewArrival.css'
import { Star } from 'lucide-react';
import element1 from '/Images/element1.png'
import element2 from '/Images/element2.png'
import element3 from '/Images/element3.png'
import element4 from '/Images/element4.png'
import element5 from '/Images/element5.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function NewArrival() {
  

  return (
    <div className='NewArrivalPage'>
      <h1 className='NewArrival-h1-tag'>New Arrival Products</h1>
      <div className=' '>
      <div className="grid md:grid-cols-3 gap-10 mb-10">
  {[element1, element2, element3, element4, element5, element1].map((imgSrc, index) => (
    <div key={index} className="NewArrival-element1 justify-self-center">
      <div className="flex">
        <p className="text-white rounded-full bg-red-500 px-6 py-1">20%</p>
      </div>
      <div className="NewArrival-element-Img-div">
        <img className="w-40 h-40" src={imgSrc} alt="NewArrival-element-Img" />
      </div>
      <div className="NewArrival-element-text">
        <p>Lorem ipsum dolor sit(poly bag)</p>
      </div>
      <div className="NewArrival-element-rate">
        <div className="NewArrival-element-rate1">
          <p>$199.00</p>
        </div>
        <div className="NewArrival-element-rate2">
          <p>$155.99</p>
        </div>
      </div>
      <div className="NewArrival-element-stars">
        {[...Array(4)].map((_, i) => (
          <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-500" />
        ))}
        <FontAwesomeIcon icon={faStar} />
        <p>(2)</p>
      </div>
    </div>
  ))}
  </div>

      </div>
    </div>
  )
}
