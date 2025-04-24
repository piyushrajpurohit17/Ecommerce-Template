import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

const OrderSummary = ({ cart = [], totalAmount = 0 }) => {
  const itemsRef = useRef([]);
  const messageRef = useRef(null);

  // useLayoutEffect(() => {
  //   gsap.from(itemsRef.current, {
  //     opacity: 0,
  //     y: 50,
  //     stagger: 0.2,
  //     duration: 1,
  //     ease: 'power3.out',
  //   });

  //   gsap.from(messageRef.current, {
  //     opacity: 0,
  //     scale: 0.5,
  //     duration: 1.5,
  //     delay: 1.5,
  //     ease: 'elastic.out(1, 0.75)',
  //   });
  // }, []);

  return (
    <section className="order-summary bg-gray-50  p-6">
      <div className="mx-auto max-w-4xl">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Order Summary</h2>

          {/* Product List with GSAP Animation */}
          <div className="order-items mb-8">
            {cart.map((item, index) => (
              <div
                key={item.id}
                ref={(el) => (itemsRef.current[index] = el)}
                className="order-summary-item flex justify-between items-center mb-4"
              >
                <div className="flex flex-col">
                  <span className="text-lg font-semibold text-gray-800">{item.name}</span>
                  <span className="text-sm text-gray-600">Quantity: {item.quantity}</span>
                </div>
                <span className="text-lg font-semibold text-gray-900">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          {/* Total Amount */}
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-semibold text-gray-800">Total:</h3>
            <p className="text-2xl font-bold text-green-600">${totalAmount.toFixed(2)}</p>
          </div>

          {/* Thank You Message */}
          <div ref={messageRef} className="thank-you-message text-center mt-8">
            <p className="text-4xl font-extrabold text-gray-800">Thank You for Your Order!</p>
            <p className="text-lg text-gray-600 mt-4">
              Your order is being processed and will be shipped shortly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSummary;
