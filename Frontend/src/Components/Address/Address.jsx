import React, { useEffect, useRef, useState } from "react";
import {
  User, Phone, MapPin, Home, Landmark, Building,
} from "lucide-react";
import gsap from "gsap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const states = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh",
  "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

const Input = ({ label, name, type = "text", value, onChange, Icon, required = true }) => (
  <div className="relative z-0 w-full group">
    <div className="absolute top-3 left-0 text-gray-400">
      <Icon size={20} />
    </div>
    <input
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      required={required}
      placeholder=" "
      className="peer pl-8 block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-3 text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0"
    />
    <label
      htmlFor={name}
      className="absolute top-3 left-8 -z-10 origin-[0] scale-75 transform text-gray-500 duration-300
        peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100
        peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-green-600
        peer-valid:-translate-y-6 peer-valid:scale-75 peer-valid:text-green-600"
    >
      {label}
    </label>
  </div>
);

const Address = () => {
  const [formData, setFormData] = useState({
    fullName: "", phone: "", pincode: "", house: "",
    area: "", landmark: "", city: "", state: "", addressType: "Home",
  });

  const formRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Address Submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-sky-50 to-green-100 flex flex-col items-center px-4 py-8">
      {/* Product Scroll */}
      <div className="w-full max-w-6xl mb-8 overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 w-max px-2 sm:px-0">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="min-w-[220px] bg-white shadow-md rounded-lg p-4 flex-shrink-0">
              <h4 className="font-semibold text-gray-800 mb-2">Product {item}</h4>
              <div className="flex justify-end">
                <p className="text-white rounded-full bg-red-500 px-3 py-1 text-sm">20%</p>
              </div>
              <img className="w-24 mx-auto my-2" src="/Images/Sauce.png" alt="Product" />
              <p className="text-center text-sm mb-2">Lorem ipsum dolor sit (poly bag)</p>
              <div className="flex justify-center gap-2 text-sm">
                <p className="line-through text-gray-500">$199.00</p>
                <p className="text-green-600 font-semibold">$155.99</p>
              </div>
              <div className="flex justify-center items-center gap-1 text-yellow-500 mt-2">
                {[...Array(4)].map((_, i) => <FontAwesomeIcon key={i} icon={faStar} />)}
                <FontAwesomeIcon icon={faStar} className="text-gray-300" />
                <span className="text-gray-600 text-xs ml-1">(2)</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Address Form */}
      <div ref={formRef} className="bg-white shadow-xl rounded-xl p-6 sm:p-8 w-full max-w-4xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-green-600">Delivery Address</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Input label="Full Name" name="fullName" Icon={User} value={formData.fullName} onChange={handleChange} />
          <Input label="Mobile Number" name="phone" type="tel" Icon={Phone} value={formData.phone} onChange={handleChange} />
          <Input label="Pincode" name="pincode" Icon={MapPin} value={formData.pincode} onChange={handleChange} />
          <Input label="Flat, House No., Building" name="house" Icon={Home} value={formData.house} onChange={handleChange} />
          <Input label="Area, Street, Sector, Village" name="area" Icon={Building} value={formData.area} onChange={handleChange} />
          <Input label="Landmark (optional)" name="landmark" Icon={Landmark} value={formData.landmark} onChange={handleChange} required={false} />
          <Input label="City/Town" name="city" Icon={MapPin} value={formData.city} onChange={handleChange} />
          <div>
            <label className="text-gray-500 text-sm mb-1 block">State</label>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              className="w-full border-b-2 border-gray-300 bg-transparent py-3 focus:outline-none focus:border-green-600"
            >
              <option value="">Select State</option>
              {states.map((state) => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>

          <div className="col-span-1 sm:col-span-2 flex flex-wrap items-center gap-4 pt-2">
            <p className="text-gray-600 font-medium">Address Type:</p>
            {["Home", "Work"].map((type) => (
              <label key={type} className="flex items-center gap-2 text-gray-700">
                <input
                  type="radio"
                  name="addressType"
                  value={type}
                  checked={formData.addressType === type}
                  onChange={handleChange}
                  className="accent-green-600"
                />
                {type}
              </label>
            ))}
          </div>

          <div className="col-span-1 sm:col-span-2">
            <Link to="/ordersummery">
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition"
              >
                Order Now
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Address;
