import React from 'react';
import { ShieldCheck, Truck, BadgeCheck, DollarSign } from 'lucide-react';

const features = [
    {
        icon: <Truck className="text-orange-500 size-6" />,
        title: 'Free Delivery',
        desc: 'Technical support specialists do not keep customers waiting - we quickly cover applications.',
    },
    {
        icon: <ShieldCheck className="text-orange-500 size-6" />,
        title: 'Secure Payment',
        desc: 'Technical support specialists do not keep customers waiting - we quickly cover applications.',
    },
    {
        icon: <BadgeCheck className="text-orange-500 size-6" />,
        title: 'Quality Guarantee',
        desc: 'Technical support specialists do not keep customers waiting - we quickly cover applications.',
    },
    {
        icon: <DollarSign className="text-orange-500 size-6" />,
        title: 'Guarantee Savings',
        desc: 'Technical support specialists do not keep customers waiting - we quickly cover applications.',
    },
];

export default function BestValues() {
    return (
        <section className="md:p-20 p-4 mt-40">
            <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left: Feature Cards */}
                <div className="grid grid-cols-2 gap-6 justify-self-center">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                            <div className="mb-3">{feature.icon}</div>
                            <h3 className="font-bold text-lg">{feature.title}</h3>
                            <p className="text-sm text-gray-500 mt-2">{feature.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Right: Text + Image */}
                <div className="flex flex-col items-center justify-center justify-self-center text-center md:text-left md:items-start">
                    <h2 className="text-3xl md:text-4xl font-bold leading-snug text-gray-900 mb-6">
                        We don’t just Sell Food—<br className="hidden md:block" />
                        <span className="text-black">We Promote a Lifestyle.</span>
                    </h2>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/706/706797.png"
                        alt="Lifestyle Image"
                        className="w-64 h-auto mt-6 rounded-xl shadow-lg rotate-6"
                    />
                </div>
            </div>
        </section>
    );
}
