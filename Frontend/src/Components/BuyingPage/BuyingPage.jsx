import React, { useState } from 'react'
import './BuyingPage.css'
import Element2 from '../../../public/Images/element2.png'
import { IndianRupee } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


import { MoveLeft, MoveRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const feedbackData = [
    {
        rating: "★★★★★",
        comment: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
        name: "Leslie Alexander",
        role: "Freelance React Developer",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        rating: "★★★★★",
        comment: "My new site is a breeze to navigate. Everything is where I expect it to be, and it's lightning fast!",
        name: "Alex Johnson",
        role: "Frontend Engineer",
        image: "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
        rating: "★★★★★",
        comment: "It’s just what I needed. Easy to use and incredibly efficient.",
        name: "Emily Carter",
        role: "Product Designer",
        image: "https://randomuser.me/api/portraits/women/65.jpg"
    }
];

export default function BuyingPage() {

     const [currentIndex, setCurrentIndex] = useState(0);
    
        const handleNext = () => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbackData.length);
        };
    
        const handlePrev = () => {
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? feedbackData.length - 1 : prevIndex - 1
            );
        };
    
        const visibleCards = [
            feedbackData[currentIndex],
            feedbackData[(currentIndex + 1) % feedbackData.length],
            feedbackData[(currentIndex + 2) % feedbackData.length],
        ];








    return (
        <div className='BuyingPage'>
            <div className='grid md:grid-cols-5 grid-cols-1 max-md:px-4 items-center'>
                <div className='BuyinPage-Image-Side md:col-span-2 md:justify-self-end justify-self-center'>
                    <img className='BuyingPage-img w-full' src={Element2} alt="image of the product " />
                </div>
                <hr className='border-3 border-green-800 md:rotate-90 max-md:my-6 shadow-2xl md:w-full rounded-3xl' />
                <div className='BuyingPage-detail-Side md:col-span-2 max-md:mt-6'>
                    <h1>Product name</h1>
                    <div className="">
                        <div className="flex justify-start items-center gap-1">

                            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                            <FontAwesomeIcon icon={faStar} className="" />



                        </div>
                    </div>
                    <div className='BuyingPage-rate'>
                        <p>MRP:  </p>
                        <IndianRupee size={16} />
                        <p>40000</p>
                    </div>
                    <Link to="/addtocart"><button className='BuyingPage-btn'>Add to Cart</button></Link>
                    <br />
                    <Link to="/addtocart"><button className='BuyingPage-btn'>Buy it Now</button></Link>
                    <h3>Detail :</h3>
                    <p className='BuyingPage-ptag-details'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni officiis ea quae totam
                        dicta fugiat sapiente quaerat enim nemo vel.</p>
                </div>
            </div>

            <div className="">
                    <h1 className="text-center font-bold text-4xl mt-6">Reviews</h1>
            <div className="col-span-3">
                        <div className="py-6 px-4 sm:px-6 lg:px-8">
                            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {visibleCards.map((feedback, index) => (
                                    <div key={index} className="bg-white text-black rounded-xl shadow-md p-6 space-y-4">
                                        <div className="text-yellow-400 text-xl">{feedback.rating}</div>
                                        <p>{feedback.comment}</p>
                                        <div className="flex items-center space-x-4 pt-4">
                                            <img className="w-10 h-10 rounded-full" src={feedback.image} alt={feedback.name} />
                                            <div>
                                                <p className="font-semibold">{feedback.name}</p>
                                                <p className="text-sm text-gray-500">{feedback.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="px-20">
                        <div className="flex gap-3">
                            <button onClick={handlePrev} className="bg-gray-200 p-2 rounded-full">
                                <MoveLeft className="text-black size-6" />
                            </button>
                            <button onClick={handleNext} className="bg-black p-2 rounded-full">
                                <MoveRight className="text-white size-6" />
                            </button>
                        </div>
                    </div>
            </div>
        </div>
    )
}
