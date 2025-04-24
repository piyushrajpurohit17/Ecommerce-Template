import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Heart, User, ChevronDown, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Update on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleDropdownToggle = (title) => {
    if (isMobile) {
      setOpenDropdown((prev) => (prev === title ? null : title));
    }
  };

  const menuItems = ["All categories", "Home", "Shop", "Hot Sale"];

  return (
    <div className='py-4 shadow-2xl'>
      {/* Top Nav */}
      <div className='flex flex-wrap md:flex-nowrap items-center justify-between px-4 md:px-8'>
        <div className='flex items-center gap-2 w-auto md:w-1/6'>
          <img src="/Images/logo.jpg" alt="Logo" className="w-16" />
          <h2 className='text-2xl font-semibold'>BITEZY</h2>
        </div>

        <div className='hidden md:flex w-1/3 items-center bg-gray-200 rounded-full overflow-hidden'>
          <div className='flex items-center px-4'>
            <Search size={18} />
          </div>
          <input
            type="text"
            placeholder='Search Products'
            className='flex-1 py-2 px-2 bg-transparent focus:outline-none'
          />
          <button className='bg-green-700 text-white px-6 py-2 rounded-r-full'>Search</button>
        </div>

        <div className='flex gap-4 items-center'>
          <Link to="/addtocart" className='bg-gray-200 p-2 rounded-full'>
            <ShoppingBag size={18} />
          </Link>
          <Link to="/addtocart" className='bg-gray-200 p-2 rounded-full'>
            <Heart size={18} />
          </Link>
        </div>

        <div className='hidden md:flex items-center gap-2'>
          <User size={32} />
          <div className='text-sm'>
            <p>Welcome,</p>
            <p className='font-medium'>Piyush Rajpurohit</p>
          </div>
        </div>

        <div className='md:hidden'>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu size={28} />
          </button>
        </div>
      </div>

      <hr className='my-4 border-gray-300' />

      {/* Dropdown Menu */}
      <div className={`flex flex-col md:flex-row gap-4 px-4 md:px-8 ${mobileMenuOpen ? 'block' : 'hidden md:flex'}`}>
        {menuItems.map((title, i) => (
          <div
            key={i}
            className='relative'
            onMouseEnter={() => !isMobile && setOpenDropdown(title)}
            onMouseLeave={() => !isMobile && setOpenDropdown(null)}
          >
            <div
              className='flex items-center gap-1 cursor-pointer font-medium'
              onClick={() => handleDropdownToggle(title)}
            >
              <span>{title}</span>
              <ChevronDown size={20} />
            </div>

            {(openDropdown === title) && (
              <div className='absolute md:left-0  flex flex-col bg-gray-100 p-4 rounded-md shadow-md z-20 min-w-[150px]'>
                {title === 'All categories' && (
                  <LinkList links={['Fruits', 'Fast Food', 'Coffees']} />
                )}
                {title === 'Home' && (
                  <LinkList links={['Best Deals', 'New Arrivals', 'Feedback']} />
                )}
                {title === 'Shop' && (
                  <LinkList links={['Profile', 'Settings', 'Logout']} />
                )}
                {title === 'Hot Sale' && (
                  <LinkList links={['Fruits', 'Cold Drinks', 'Hot Drinks']} />
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function LinkList({ links }) {
  return (
    <div className='flex flex-col gap-2'>
      {links.map((text, i) => (
        <Link key={i} to="/productlist">{text}</Link>
      ))}
    </div>
  );
}
