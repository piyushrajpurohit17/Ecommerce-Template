import React from 'react'

export default function BestDeals() {
    return (
        <>

            <section className="px-6 md:px-20 py-10 mt-32">
                <h1 className="text-4xl font-extrabold mb-8 text-[#1C1C1C]">Best Deals</h1>
                <div className="grid md:grid-cols-2 gap-6 md:px-32">

                    {/* Left Big Card */}
                    <div className="bg-green-100  rounded-2xl p-6 flex flex-col">
                        <div className="flex flex-col gap-2 max-w-sm">
                            <p className="text-lg">Flat Sale <span className="text-green-600 font-bold">50%</span></p>
                            <h2 className="text-4xl font-extrabold text-[#1C1C1C]">Cashback</h2>
                            <p className="text-sm text-gray-600">Offer starts from <span className="text-green-700 font-semibold">$29.12</span></p>
                            <div className="">
                                <button className="bg-green-700 text-white px-5 py-2 mt-4 rounded-full text-sm hover:bg-green-800 transition">Shop Now</button>

                            </div>
                        </div>
                        <div className="flex justify-end">
                        <img src="/Images/Broccoli.png" alt="Broccoli" className="md:-mt-10 w-96" />
                        </div>
                    </div>

                    {/* Right Side Column */}
                    <div className="flex flex-col gap-6  md:-mt-14">
                        {/* Top Card */}
                        <div className="bg-red-100 rounded-2xl p-6 flex flex-col ">
                            <div className="flex flex-col gap-2">
                                <h2 className="text-xl font-extrabold text-[#1C1C1C]">Salsa Sauce</h2>
                                <p className="text-sm text-gray-600">Offer starts from <span className="text-red-600 font-semibold">$29.12</span></p>
                                <div className="flex justify-start items-center">
                                    <button className="bg-red-500 text-white px-4 py-1 mt-2 rounded-full text-sm hover:bg-red-600 transition">Shop Now</button>

                                </div>
                            </div>
                            <div className="flex justify-end">
                                <img src="/Images/Sauce.png" alt="Salsa Sauce" className="w-60  md:-mt-20" />
                            </div>
                        </div>

                        {/* Bottom Card */}
                        <div className="bg-indigo-100 rounded-2xl p-6 flex flex-col ">
                            <div className="flex flex-col gap-2">
                                <h2 className="text-xl font-extrabold text-[#1C1C1C]">Fresh Fruits</h2>
                                <p className="text-sm text-gray-600">Up to <span className="text-indigo-800 font-bold">25% Off</span></p>
                                <div className="flex ">
                                    <button className="bg-indigo-600 text-white px-4 py-1 mt-2 rounded-full text-sm hover:bg-indigo-700 transition">Shop Now</button>

                                </div>
                            </div>
                            <div className="flex justify-end md:-mt-11">
                                <img src="/Images/Grapes.png" alt="Grapes" className="w-80" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
