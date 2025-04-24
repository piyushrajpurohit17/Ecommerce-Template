import React from 'react'
import './Navbar.css'
import { ShoppingBag, Search } from 'lucide-react';
import { Heart , User , ChevronDown } from 'lucide-react';

export default function Navbar() {
    return (
        <div className='NavbarPage'>
            <div className='Navbar'>
                <div className='Navbar-logo-side'>
                    <div className='Navbar-logo-img'>
                        <ShoppingBag fill="yellow" size={28} />
                    </div>
                    <div><h2 className='text-2xl font-semibold'>EATSY</h2></div>
                </div>

                <div className='Navbar-searchbar'>
                    <div className='Navbar-search-left'>
                        <div className='Navbar-search-icon'>
                            <Search size={18} />
                        </div>
                        <input type="text" name="" placeholder='Search Products' id="" className='w-full py-2 outline-0 px-4'/>
                    </div>
                    <div className='Navbar-search-right'>
                        <button className='text-white'>Search</button>
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
                        <button > All categories  </button>
                        <ChevronDown size={20}/>
                    </div>
                   
                        <div className="dropdown-menu">
                            <a href='/profile'>Profile</a>
                            <a href="/settings">Settings</a>
                            <a href="/logout">Logout</a>
                        </div>
                 
                </div>
                <div className="Navbar-dropdown-element">
                    <div className='Navbar-dropdown-title'>
                        <button > Home  </button>
                        <ChevronDown size={20} />
                    </div>

                   
                        <div className="dropdown-menu">
                            <a href='/profile'>Profile</a>
                            <a href="/settings">Settings</a>
                            <a href="/logout">Logout</a>
                        </div>
                 
                </div>
                <div className="Navbar-dropdown-element">
                    <div className='Navbar-dropdown-title'>
                        <button onClick={() => setOpen2(!open2)}> Shop  </button>
                        <ChevronDown size={20} />
                    </div>

                 
                        <div className="dropdown-menu">
                            <a href='/profile'>Profile</a>
                            <a href="/settings">Settings</a>
                            <a href="/logout">Logout</a>
                        </div>
                
                </div>
                <div className="Navbar-dropdown-element">
                    <div className='Navbar-dropdown-title'>
                        <button > Hot Sale  </button>
                        <ChevronDown size={20} />
                    </div>

                   
                        <div className="dropdown-menu">
                            <a href='/profile'>Profile</a>
                            <a href="/settings">Settings</a>
                            <a href="/logout">Logout</a>
                        </div>
                   
                </div>
                <div className="Navbar-dropdown-element">
                    <div className='Navbar-dropdown-title'>
                        <button > Vendor  </button>
                        <ChevronDown size={20} />
                    </div>

                   
                        <div className="dropdown-menu">
                            <a href='/profile'>Profile</a>
                            <a href="/settings">Settings</a>
                            <a href="/logout">Logout</a>
                        </div>
                   
                </div>
                <div className="Navbar-dropdown-element">
                    <div className='Navbar-dropdown-title'>
                        <button>  Our Blog  </button>
                        <ChevronDown size={20} />
                    </div>

                   
                        <div className="dropdown-menu">
                            <a href='/profile'>Profile</a>
                            <a href="/settings">Settings</a>
                            <a href="/logout">Logout</a>
                        </div>
                    
                </div>
            </div>
        </div>
    )
}
