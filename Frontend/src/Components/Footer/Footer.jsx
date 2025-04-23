import React from 'react'
import './Footer.css'
import { ShoppingBag , Bell } from 'lucide-react';
import { Instagram , Facebook, Twitter, MessageCircle } from 'lucide-react';


export default function Footer() {
    return (
        <div className='FooterPage'>
            <div className='Footer-head'>
                <div className='Footer-logo'>
                    <ShoppingBag fill="#ffd858" size={36} />
                    <p>PioMart</p>
                </div >
                <p className='Footer-head-p'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla sint optio ipsam aliquid
                    atque soluta.</p>
            </div>

            <div className='flex items-center py-3'>
                 <hr className="flex-grow border-0 h-0.5 rounded-3xl bg-gradient-to-r from-[#49691f] to-[#ffd858]" />
                  <div className='Footer-social-media'> 
                    <div className="bg-black/20 p-2 rounded-full"><Instagram fill='white' /></div>
                    <div className="bg-black/20 p-2 rounded-full"> <Facebook fill='white' /></div>
                    <div className="bg-black/20 p-2 rounded-full"><Twitter fill='white' /></div>
                    <div className="bg-black/20 p-2 rounded-full"><MessageCircle fill='white' /></div>
                    
                   
                    
                    
                    </div>
                 <hr className="flex-grow border-0 h-0.5 rounded-3xl bg-gradient-to-r from-[#ffd858] to-[#49691f]" />
            </div>

            <div className='grid grid-cols-4 gap-10 px-10'>
                <div className='flex flex-col gap-2 text-white'>
                    <h1 className='font-bold'> Help Information </h1>
                    <p className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus praesentium distinctio
                         debitis? Pariatur quo perspiciatis aut ea aliquid odio harum?</p>
                    <div className='flex items-center gap-3'>
                        <Bell color='white' size={15}/>
                        <p>+ 1234567890 </p>
                    </div>
                    <div className='flex items-center gap-3'>
                    <Bell color='white' size={15}/>
                    <p>user@123gmail.com</p>
                    </div>
                </div>

                <div className='flex flex-col gap-2 text-sm text-white'>
                    <h1 className='font-bold'>Information</h1>
                    <p>About Us</p>
                    <p>Delivery Information</p>
                    <p>Privacy Policy</p>
                    <p>Terms and Conditions</p>
                    <p>Return Policy</p>
                </div>

                <div className='flex flex-col gap-2 text-sm text-white'>
                    <h1 className='font-bold'>Quick List</h1>
                    <p>Your Account</p>
                    <p>Returns & Exchanges</p>
                    <p>Return Center</p>
                    <p>Purches History</p>
                    <p>Latest News Blog</p>
                </div>

                <div className='flex flex-col gap-2 text-sm text-white'>
                    <h1 className='font-bold'>My Account</h1>
                    <p>My Account</p>
                    <p>Shopping Cart</p>
                    <p>Wishlist</p>
                    <p>Order History</p>
                    <p>International Orders</p>
                </div>
            </div>
        </div>
    )
}
