import React from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart, FaHeart } from "react-icons/fa"; // Import icons from Font Awesome

const Header = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-xl font-bold">Emall Website</div>

        {/* Navigation Links */}
        <div className="flex space-x-4 items-center">
          <NavLink to="/" className="text-white hover:text-gray-200">
            Home
          </NavLink>
          <NavLink to="/about" className="text-white hover:text-gray-200">
            About
          </NavLink>
          <NavLink to="/services" className="text-white hover:text-gray-200">
            Services
          </NavLink>
          <NavLink
            to="/productListing"
            className="text-white hover:text-gray-200"
          >
            Products
          </NavLink>
          <NavLink to="/login" className="text-white hover:text-gray-200">
            Login
          </NavLink>
          <NavLink to="/register" className="text-white hover:text-gray-200">
            Register
          </NavLink>

          {/* Wishlist Icon */}
          <NavLink
            to="/wishlist"
            className="text-white hover:text-gray-200 flex items-center space-x-1"
          >
            <FaHeart className="text-xl" />
          </NavLink>

          {/* Add to Cart Icon */}
          <NavLink
            to="cart"
            className="text-white hover:text-gray-200 flex items-center space-x-1"
          >
            <FaShoppingCart className="text-xl" />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
