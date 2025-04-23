import React, { useState } from 'react'
import './Navbar.css'
import { ShoppingBag, Search } from 'lucide-react';
import { Heart , User , ChevronDown } from 'lucide-react';

export default function Navbar() {

    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);

    return (
        <div className='NavbarPage'>
            <div className='Navbar'>
                <div className='Navbar-logo-side'>
                    <div className='Navbar-logo-img'>
                        <ShoppingBag fill="yellow " size={28} />
                    </div>
                    <div><h1>PioMart</h1></div>
                </div>

                <div className='Navbar-searchbar'>
                    <div className='Navbar-search-left'>
                        <div className='Navbar-search-icon'>
                            <Search size={18} />
                        </div>
                        <div>Search in Product</div>
                    </div>
                    <div className='Navbar-search-right'>
                        <button>Search</button>
                    </div>
                </div>

                <div className='Navbar-facility'>
                    <div className='Navbar-facility-search'> <Search size={18} /></div>
                    <div className='Navbar-facility-shopping'>
                        <button> <ShoppingBag size={18} /> </button>
                    </div>
                    <div className='Navbar-facility-heart'>
                        <button><Heart size={18} /></button>
                    </div>
                </div>

                <div className='Navbar-profile'>
                    <div className='Navbar-profile-img'>
                        <User size={32} />
                    </div>
                    <div className='Navbar-profile-text'>
                        <p>Welcome,</p>
                        <p>Piyush Rajpurohit</p>
                    </div>
                </div>
            </div>
            <hr />
            <div className='Navbar-dropdown'>
                <div className="Navbar-dropdown-element">
                    <div className='Navbar-dropdown-title'>
                        <button onClick={() => setOpen(!open)}> All categories  </button>
                        <ChevronDown size={20}/>
                    </div>
                    {open && (
                        <div className="dropdown-menu">
                            <a href='/profile'>Profile</a>
                            <a href="/settings">Settings</a>
                            <a href="/logout">Logout</a>
                        </div>
                    )}
                </div>
                <div className="Navbar-dropdown-element">
                    <div className='Navbar-dropdown-title'>
                        <button onClick={() => setOpen1(!open1)}> Home  </button>
                        <ChevronDown size={20} />
                    </div>

                    {open1 && (
                        <div className="dropdown-menu">
                            <a href='/profile'>Profile</a>
                            <a href="/settings">Settings</a>
                            <a href="/logout">Logout</a>
                        </div>
                    )}
                </div>
                <div className="Navbar-dropdown-element">
                    <div className='Navbar-dropdown-title'>
                        <button onClick={() => setOpen2(!open2)}> Shop  </button>
                        <ChevronDown size={20} />
                    </div>

                    {open2 && (
                        <div className="dropdown-menu">
                            <a href='/profile'>Profile</a>
                            <a href="/settings">Settings</a>
                            <a href="/logout">Logout</a>
                        </div>
                    )}
                </div>
                <div className="Navbar-dropdown-element">
                    <div className='Navbar-dropdown-title'>
                        <button onClick={() => setOpen3(!open3)}> Hot Sale  </button>
                        <ChevronDown size={20} />
                    </div>

                    {open3 && (
                        <div className="dropdown-menu">
                            <a href='/profile'>Profile</a>
                            <a href="/settings">Settings</a>
                            <a href="/logout">Logout</a>
                        </div>
                    )}
                </div>
                <div className="Navbar-dropdown-element">
                    <div className='Navbar-dropdown-title'>
                        <button onClick={() => setOpen4(!open4)}> Vendor  </button>
                        <ChevronDown size={20} />
                    </div>

                    {open4 && (
                        <div className="dropdown-menu">
                            <a href='/profile'>Profile</a>
                            <a href="/settings">Settings</a>
                            <a href="/logout">Logout</a>
                        </div>
                    )}
                </div>
                <div className="Navbar-dropdown-element">
                    <div className='Navbar-dropdown-title'>
                        <button onClick={() => setOpen5(!open5)}> Our Blog  </button>
                        <ChevronDown size={20} />
                    </div>

                    {open5 && (
                        <div className="dropdown-menu">
                            <a href='/profile'>Profile</a>
                            <a href="/settings">Settings</a>
                            <a href="/logout">Logout</a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
