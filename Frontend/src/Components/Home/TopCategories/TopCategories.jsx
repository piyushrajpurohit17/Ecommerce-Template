import React, { useRef } from 'react';
import { MoveLeft, MoveUpRight } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function TopCategories() {
    const scrollRef = useRef(null);

    const items = [
        { id: 1, title: 'Fresh Organic Fruits', imgpath: '/Images/Apple.png', background: 'bg-[#FFF3EF]' },
        { id: 2, title: 'Organic Vegetable Collection', imgpath: '/Images/Broccoli.png', background: 'bg-[#D3F5D0]' },
        { id: 3, title: 'Halal Direct Beef Collection', imgpath: '/Images/Meat.png', background: 'bg-[#FFF5F4]' },
        { id: 4, title: '100% Pure Bakings', imgpath: '/Images/Bread.png', background: 'bg-[#F9CE7B]' },
        { id: 5, title: 'More Collections', imgpath: '/Images/Apple.png', background: 'bg-[#E5F1FF]' },
        { id: 6, title: 'Fresh Organic Fruits', imgpath: '/Images/Apple.png', background: 'bg-[#FFF3EF]' },
        { id: 7, title: 'Organic Vegetable Collection', imgpath: '/Images/Broccoli.png', background: 'bg-[#D3F5D0]' },
        { id: 8, title: 'Halal Direct Beef Collection', imgpath: '/Images/Meat.png', background: 'bg-[#FFF5F4]' }
    ];

    const products = [
        { id: 1, title: 'Fresh Organic Fruits', imgpath: '/Images/Apple.png', oldPrice: '2000', newPrice: '1800' },
        { id: 2, title: 'Organic Vegetable Collection', imgpath: '/Images/Broccoli.png', oldPrice: '2000', newPrice: '1800' },
        { id: 3, title: 'Halal Direct Beef Collection', imgpath: '/Images/Meat.png', oldPrice: '2000', newPrice: '1800' },
        { id: 4, title: '100% Pure Bakings', imgpath: '/Images/Bread.png', oldPrice: '2000', newPrice: '1800' },
        { id: 5, title: 'More Collections', imgpath: '/Images/Apple.png', oldPrice: '2000', newPrice: '1800' },
        { id: 6, title: 'Fresh Organic Fruits', imgpath: '/Images/Apple.png', oldPrice: '2000', newPrice: '1800' },
        { id: 7, title: 'Organic Vegetable Collection', imgpath: '/Images/Broccoli.png', oldPrice: '2000', newPrice: '1800' },
        { id: 8, title: 'Halal Direct Beef Collection', imgpath: '/Images/Meat.png', oldPrice: '2000', newPrice: '1800' }
    ];

    const scroll = (direction) => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft += direction === 'left' ? -300 : 300;
        }
    };

    return (
        <section className="py-10 mt-20 h-full">
            <div className="absolute -z-10 mt-52">
                <img src="/Images/background.png" alt="" className="slanted-background w-3/5" />
            </div>

            <div className="px-4 sm:px-8 md:px-20">
                <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1C1C1C]">Top Categories</h1>
                    <div className="flex gap-3 mt-4 md:mt-0">
                        <button onClick={() => scroll('left')} className="bg-black p-2 rounded-full">
                            <MoveLeft className="text-white size-4" />
                        </button>
                        <button onClick={() => scroll('right')} className="bg-[#49691D] p-2 rounded-full">
                            <MoveUpRight className="text-white size-4" />
                        </button>
                    </div>
                </div>

                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide p-2"
                >
                    {items.map((item) => (
                        <div key={item.id} className="w-52 sm:w-60 bg-white rounded-xl shadow-md p-4 flex-shrink-0">
                            <div className="flex flex-col items-center gap-4">
                                <h2 className="text-lg sm:text-xl font-semibold text-[#1C1C1C] leading-tight text-center">
                                    {item.title}
                                </h2>
                                <div className={`rounded-full w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center ${item.background}`}>
                                    <img src={item.imgpath} alt={item.title} className="w-20 h-20 sm:w-24 sm:h-24 object-contain" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-24 px-4 sm:px-8 md:px-20">
                <div className="flex justify-center items-center mb-6">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1C1C1C]">Best Deals</h1>
                </div>

                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide p-2"
                >
                    {products.map((product) => (
                        <div key={product.id} className="w-64 sm:w-72 bg-white rounded-xl shadow-md p-4 flex-shrink-0">
                            <div className="flex flex-col gap-6">
                                <div className="flex justify-center items-center">
                                    <img src={product.imgpath} alt={product.title} className="w-32 h-32 sm:w-40 sm:h-40" />
                                </div>

                                <div className="flex flex-col gap-1">
                                    <h2 className="font-semibold text-center sm:text-left">{product.title}</h2>

                                    <div className="flex justify-center sm:justify-start items-center gap-2">
                                        <p className="text-lg text-red-500 font-semibold">${product.newPrice}</p>
                                        <span className='text-sm line-through'>${product.oldPrice}</span>
                                    </div>

                                    <div className="flex items-center justify-center sm:justify-start gap-4">
                                        <div className="flex items-center gap-1">
                                            {[...Array(4)].map((_, i) => (
                                                <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-500" />
                                            ))}
                                            <FontAwesomeIcon icon={faStar} className="text-gray-300" />
                                        </div>
                                        <p>(2)</p>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className="bg-green-800 h-2 rounded-full transition-all duration-500 ease-in-out"
                                                style={{ width: `50%` }}
                                            />
                                        </div>
                                        <p className="text-sm">Solid 20</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center sm:justify-end items-center mt-10">
                    <button className="bg-[#1F1F1F] text-white rounded-full px-6 py-2">All Products</button>
                </div>
            </div>
        </section>
    );
}
