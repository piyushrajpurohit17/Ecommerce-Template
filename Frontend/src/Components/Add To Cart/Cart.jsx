import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Cart = () => {
  const calculateTotal = (cartItems) => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const [cart, setCart] = useState([
    { id: 1, name: 'Product 1', price: 155.99, quantity: 1 },
    { id: 2, name: 'Product 2', price: 199.00, quantity: 1 },
    { id: 3, name: 'Product 3', price: 99.99, quantity: 2 },
  ]);
  const [totalAmount, setTotalAmount] = useState(calculateTotal(cart));

  const updateQuantity = (productId, quantity) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: quantity } : item
      );
      setTotalAmount(calculateTotal(updatedCart));
      return updatedCart;
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter(item => item.id !== productId);
      setTotalAmount(calculateTotal(updatedCart));
      return updatedCart;
    });
  };

  return (
    <section className="bg-gray-50  p-6">
      <div className=" mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Side: Product List (removed "Add to Cart" button) */}
          <div className="col-span-2 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Product List</h2>
            <div className="grid md:grid-cols-3 overflow-y-auto h-96 py-6 gap-6">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="bg-white rounded-lg shadow-lg p-4 hover:shadow-2xl transition-shadow duration-300">
                  <h4 className="text-xl font-semibold text-gray-800">Product {item}</h4>
                  <div className="mt-4">
                    <div className="bg-red-500 text-white text-sm px-4 py-1 inline-block rounded-full mb-4">
                      20% OFF
                    </div>
                    <img className="w-full h-48 object-cover rounded-lg mb-4" src="/Images/Sauce.png" alt="Product" />
                    <p className="text-gray-600 text-sm mb-4">Lorem ipsum dolor sit (poly bag)</p>
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-xl text-gray-900 font-semibold line-through">$199.00</p>
                      <p className="text-xl text-green-500 font-semibold">$155.99</p>
                    </div>
                    <div className="flex items-center mb-4">
                      {[...Array(4)].map((_, idx) => (
                        <FontAwesomeIcon key={idx} icon={faStar} className="text-yellow-500" />
                      ))}
                      <FontAwesomeIcon icon={faStar} className="text-gray-300" />
                      <span className="ml-2 text-sm text-gray-500">(2)</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Cart with Quantity and Remove */}
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-2 border-gray-300">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Cart</h2>
            <div className="border-b pb-4">
              {cart.length === 0 ? (
                <p className="text-lg text-gray-500">Your cart is empty</p>
              ) : (
                <ul>
                  {cart.map((item) => (
                    <li key={item.id} className="flex justify-between items-center mb-4">
                      <div className="flex items-center">
                        <span className="text-lg text-gray-700">{item.name}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-600 text-lg mr-4">${item.price}</span>
                        <input
                          type="number"
                          value={item.quantity}
                          min="1"
                          className="w-12 text-center border rounded-lg p-1"
                          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                        />
                        <button
                          className="text-red-500 hover:text-red-700 ml-4"
                          onClick={() => removeFromCart(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="mt-6">
              <div className="flex justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-800">Total</h3>
                <p className="text-xl font-semibold text-gray-900">${totalAmount.toFixed(2)}</p>
              </div>
              <Link to="/address">
              <button
                className="w-full bg-green-600 text-white py-3 rounded-lg mt-6 hover:bg-green-700 transition-colors duration-300"
              >
                Proceed to Checkout
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
