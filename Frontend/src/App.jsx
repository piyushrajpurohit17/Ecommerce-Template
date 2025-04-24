import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'

import Footer from './Components/Footer/Footer'


import HomeMian from './Components/Home/HomeMain/HomeMian'
import './App.css'
import Login from './Components/Login/Login'
import ProductList from './Components/ProductList/ProductList'
import Address from './Components/Address/Address'
import UserProfile from './Components/Profile/UserProfile'
import Cart from './Components/Add To Cart/Cart'
import OrderSummary from './Components/OrderSummery/OrderSummery'
import BuyingPage from './Components/BuyingPage/BuyingPage'



export default function App() {

  const cart = [
    { id: 1, name: 'Product 1', price: 155.99, quantity: 2 },
    { id: 2, name: 'Product 2', price: 199.00, quantity: 1 },
  ];
  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  
  return (
    <>
    
    <BrowserRouter>
     <Navbar/>
      <Routes>

        < Route path='/' element={<HomeMian/>}/>
        <Route path='/Login' element={<Login/>} />
        <Route path='/productlist' element={<ProductList/>}/>
        <Route path='/Address' element={<Address/>} />
        <Route path='/Profile' element={<UserProfile/>}/>
        <Route path='/AddToCart' element={<Cart/>} />
        <Route path='ordersummery' element={<OrderSummary cart={cart} totalAmount={totalAmount} />} />
        <Route path='/productlist' element={<ProductList/>}/>
        <Route path='/buyingpage' element={<BuyingPage/>}/>
        
        
      </Routes>
     < Footer/> 
    </BrowserRouter>
   
    
    </>
  )
}
