import React, { useState } from 'react';
import { MoveLeft, MoveRight } from 'lucide-react';

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

export default function Feedback() {
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
        <section className="">
            <div className="absolute -z-10 right-0 bg-[#496A1D] h-screen w-1/3 slanted-background">
                <div className="flex items-center h-screen">
                    <h1 className="-rotate-90 text-9xl font-semibold font-serif text-[#5B7835] ">Feedback</h1>
                </div>
            </div>

            <div className="md:px-20 px-4">
                <div className="grid grid-cols-3 items-center pt-20">
                    <h1 className="md:text-4xl text-xl font-bold col-span-2">
                        What our Customers <br /> Have to Say...
                    </h1>

                    <div className="md:col-end-4 md:justify-self-center max-md:w-full">
                        <button className='bg-[#FA9E20] max-md:text-sm   font-bold px-6 py-2 rounded-full'>Join The PioMart</button>
                    </div>

                    <div className="col-span-3">
                        <div className="py-12 px-4 sm:px-6 lg:px-8">
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

                    <div className="">
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
        </section>
    );
}
