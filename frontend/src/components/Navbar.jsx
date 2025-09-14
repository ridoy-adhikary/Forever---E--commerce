import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const menuItems = [
    { name: "HOME", path: "/" },
    { name: "COLLECTION", path: "/collection" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <nav className="flex items-center justify-between py-5 px-6 font-medium relative">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src={assets.logo}
          alt="logo"
          className="w-36 h-auto object-contain cursor-pointer"
        />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden sm:flex gap-8 text-gray-700">
        {menuItems.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 hover:text-primary ${
                  isActive ? "text-primary" : ""
                }`
              }
            >
              <p>{item.name}</p>
              <hr className="w-2/4 h-[1.5px] bg-gray-700 hidden" />
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Right Section: Search, Profile, Cart, Mobile Menu */}
      <div className="flex items-center gap-6">
        {/* Search */}
        <img
          src={assets.search_icon}
          alt="Search"
          className="w-5 h-5 cursor-pointer"
        />

        {/* Profile Dropdown */}
        <div className="relative group">
          <img
            src={assets.profile_icon}
            alt="Profile"
            className="w-5 h-5 cursor-pointer"
          />
          <div className="absolute right-0 mt-3 w-36 hidden group-hover:flex flex-col gap-2 p-3 bg-slate-100 text-gray-500 rounded shadow-lg">
            <p className="cursor-pointer hover:text-black">My Profile</p>
            <p className="cursor-pointer hover:text-black">Order</p>
            <p className="cursor-pointer hover:text-black">Logout</p>
          </div>
        </div>

        {/* Cart */}
        <Link to="/cart" className="relative">
          <img
            src={assets.cart_icon}
            alt="Cart"
            className="w-5 h-5 cursor-pointer"
          />
          <span className="absolute -right-1 -bottom-1 w-4 h-4 text-[8px] flex items-center justify-center bg-black text-white rounded-full">
            10
          </span>
        </Link>

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setMenuVisible(!menuVisible)}
          src={assets.menu_icon}
          alt="Menu"
          className="w-5 h-5 cursor-pointer sm:hidden"
        />
      </div>

      {/* Mobile Menu */}
      {menuVisible && (
        <div className="sm:hidden absolute top-full left-0 w-full bg-white shadow-md z-50 flex flex-col items-start px-6 py-4 gap-4">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setMenuVisible(false)}
              className="w-full text-gray-700 hover:text-primary"
            >
              {item.name}
            </NavLink>
          ))}
          
        </div>
      )}
    </nav>
  );
};

export default Navbar;
