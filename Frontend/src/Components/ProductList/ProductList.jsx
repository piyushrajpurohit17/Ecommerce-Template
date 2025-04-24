import React from 'react'
import { Link } from 'react-router-dom'
import './ProductList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function ProductList() {

  const productlist = [
    { id: 1, discount: "20%", image: "/Images/Sauce.png", productName: "Vada vada Pav...!!! ", price: "$202", disPrice: "$110" },
    { id: 2, discount: "25%", image: "/Images/Sauce.png", productName: "Bhaji vada Pav...!!! ", price: "$205", disPrice: "$120" },
    { id: 3, discount: "21%", image: "/Images/Sauce.png", productName: "ipsum dolor sit commodi rerum! ", price: "$201", disPrice: "$130" },
    { id: 4, discount: "22%", image: "/Images/Sauce.png", productName: "amet amet enim ullam ", price: "$203", disPrice: "$140" },
    { id: 5, discount: "23%", image: "/Images/Sauce.png", productName: "lorem ayega yaha se.", price: "$206", disPrice: "$150" },
    { id: 6, discount: "24%", image: "/Images/Sauce.png", productName: "Lorem ipsum dolor sit amet.", price: "$209", disPrice: "$160" },
    { id: 7, discount: "26%", image: "/Images/Sauce.png", productName: "consectetur adipisicing elit.", price: "$208", disPrice: "$170" },
    { id: 8, discount: "27%", image: "/Images/Sauce.png", productName: "Necessitatibus eveniet sequi", price: "$207", disPrice: "$180" },
    { id: 9, discount: "29%", image: "/Images/Sauce.png", productName: "saepe! Quisquam perferendis, ", price: "$204", disPrice: "$190" },
  ]

  return (
    <>

      <section className="">
        <h1 className='Productlist-title'>Product List</h1>
       <div className='NewArrivalPage'>
             <h1 className='NewArrival-h1-tag'>New Arrival Products</h1>
             <div className=' '>
             <div className="grid md:grid-cols-3 gap-10 mb-10">
         {productlist.map((productlist) => (
           <Link to="/buyingpage">
              <div key={productlist.id} className="NewArrival-element1 justify-self-center">
             <div className="flex">
               <p className="text-white rounded-full bg-red-500 px-6 py-1">20%</p>
             </div>
             <div className="NewArrival-element-Img-div">
               <img className="w-40 h-40" src={productlist.image} alt="NewArrival-element-Img" />
             </div>
             <div className="NewArrival-element-text">
               <p>Lorem ipsum dolor sit(poly bag)</p>
             </div>
             <div className="NewArrival-element-rate">
               <div className="NewArrival-element-rate1">
                 <p>$199.00</p>
               </div>
               <div className="NewArrival-element-rate2">
                 <p>$155.99</p>
               </div>
             </div>
             <div className="NewArrival-element-stars">
               {[...Array(4)].map((_, i) => (
                 <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-500" />
               ))}
               <FontAwesomeIcon icon={faStar} />
               <p>(2)</p>
             </div>
           </div>
           </Link>
         ))}
         </div>
       
             </div>
           </div>

      </section>

    </>
  )
}
