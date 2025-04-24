import React from 'react'
import './BuyingPage.css'
import Element2 from '../../../public/Images/element2.png'
import { IndianRupee } from "lucide-react";

export default function BuyingPage() {
    return (
        <div className='BuyingPage'>
            <div className='BuyingPage-heroSection'>
                <div className='BuyinPage-Image-Side'>
                    <img className='BuyingPage-img' src={Element2} alt="image of the product " />
                </div>
                <hr />
                <div className='BuyingPage-detail-Side'>
                    <h1>Product name</h1>
                    <div className='BuyingPage-rate'>
                        <p>MRP:  </p>
                        <IndianRupee size={16} />
                        <p>40000</p>
                    </div>
                    <button className='BuyingPage-btn'>Add to Cart</button>
                    <br />
                    <button className='BuyingPage-btn'>Buy it Now</button>
                    <h3>Detail :</h3>
                    <p className='BuyingPage-ptag-details'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni officiis ea quae totam
                        dicta fugiat sapiente quaerat enim nemo vel.</p>
                </div>
            </div>
        </div>
    )
}
