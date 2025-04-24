import React, { useRef, useEffect, useState } from "react";
import {
  User,
  Mail,
  Phone,
  Info,
  Calendar,
  MapPin,
  ShoppingCart,
  Heart,
  ClipboardList,
} from "lucide-react";
import gsap from "gsap";


const Input = ({
  label,
  name,
  value,
  onChange,
  Icon,
  type = "text",
  textarea = false,
  disabled = false,
}) => (
  <div className="relative w-full">
    <div className="absolute left-0 top-3 text-green-600 pointer-events-none">
      <Icon size={20} />
    </div>
    {textarea ? (
      <textarea
        name={name}
        id={name}
        rows="4"
        disabled={disabled}
        value={value}
        onChange={onChange}
        placeholder=" "
        className={`peer pl-8 pt-4 block w-full border-0 border-b-2 ${
          disabled ? "border-gray-200 text-gray-500" : "border-gray-300 text-gray-900"
        } bg-transparent appearance-none focus:border-green-600 focus:outline-none resize-none`}
      />
    ) : (
      <input
        type={type}
        name={name}
        id={name}
        disabled={disabled}
        value={value}
        onChange={onChange}
        placeholder=" "
        className={`peer pl-8 pt-4 block w-full border-0 border-b-2 ${
          disabled ? "border-gray-200 text-gray-500" : "border-gray-300 text-gray-900"
        } bg-transparent appearance-none focus:border-green-600 focus:outline-none`}
      />
    )}
    <label
      htmlFor={name}
      className={`absolute left-8 top-3 text-gray-500 text-sm transition-all duration-300 transform origin-[0] scale-100 
      peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100
      peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-green-600
      ${value ? "-translate-y-4 scale-75 text-green-600" : ""}`}
    >
      {label}
    </label>
  </div>
);



const UserProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    address: "",
    bio: "",
  });

  const [avatar, setAvatar] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const formRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile Data:", formData);
    setIsEditing(false);
  };

  return (
    <div className=" bg-gradient-to-br from-green-50 to-white p-6 flex flex-col items-center">
      <div
        ref={formRef}
        className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-6xl flex flex-col lg:flex-row gap-10"
      >
        {/* Left Panel */}
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <label className="cursor-pointer relative group mb-4">
            <img
              src={avatar || "/Images/user.png"}
              alt="Profile"
              className="w-36 h-36 rounded-full object-cover border-4 border-green-500 shadow-md"
            />
            {isEditing && (
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                className="hidden"
              />
            )}
            <span className="absolute bottom-0 left-0 right-0 text-xs text-white bg-black bg-opacity-50 rounded-b-lg opacity-0 group-hover:opacity-100 transition">
              Change
            </span>
          </label>
          <h2 className="text-2xl font-bold text-green-600">
            Welcome, {formData.name || "User"}!
          </h2>
          <p className="text-gray-500 mt-1 mb-4">
            {isEditing ? "Edit your profile below" : "Your personal profile info"}
          </p>

          <div className="flex gap-4 flex-wrap justify-center mt-2">
            <button className="flex items-center gap-2 bg-green-100 hover:bg-green-200 text-green-700 px-4 py-2 rounded-lg border border-green-400 transition">
              <Heart size={18} />
              Wishlist
            </button>
            <button className="flex items-center gap-2 bg-green-100 hover:bg-green-200 text-green-700 px-4 py-2 rounded-lg border border-green-400 transition">
              <ClipboardList size={18} />
              Orders
            </button>
            <button className="flex items-center gap-2 bg-green-100 hover:bg-green-200 text-green-700 px-4 py-2 rounded-lg border border-green-400 transition">
              <ShoppingCart size={18} />
              Cart
            </button>
          </div>

          <button
            type="button"
            onClick={() => setIsEditing(!isEditing)}
            className="mt-6 px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white font-medium transition"
          >
            {isEditing ? "Cancel Edit" : "Edit Profile"}
          </button>
        </div>

        {/* Right Panel */}
        <form onSubmit={handleSubmit} className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input label="Full Name" name="name" Icon={User} value={formData.name} onChange={handleChange} disabled={!isEditing} />
          <Input label="Email" name="email" Icon={Mail} value={formData.email} onChange={handleChange} type="email" disabled={!isEditing} />
          <Input label="Phone Number" name="phone" Icon={Phone} value={formData.phone} onChange={handleChange} disabled={!isEditing} />
          <Input label="Date of Birth" name="dob" Icon={Calendar} value={formData.dob} onChange={handleChange} type="date" disabled={!isEditing} />
          <Input label="Address" name="address" Icon={MapPin} value={formData.address} onChange={handleChange} disabled={!isEditing} />
          <Input label="Short Bio" name="bio" Icon={Info} value={formData.bio} onChange={handleChange} textarea disabled={!isEditing} />

          {isEditing && (
            <div className="col-span-1 md:col-span-2">
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition"
              >
                Save Profile
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
