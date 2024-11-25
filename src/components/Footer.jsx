// Footer.js
import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:justify-between text-center lg:text-left space-y-4 lg:space-y-0">
        {/* Company Info */}
        <div className="flex flex-col items-center lg:items-start">
          <h2 className="text-2xl font-semibold">Emall Website </h2>
          <p className="text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex flex-wrap justify-center space-x-4 lg:space-x-6">
            <li>
              <NavLink
                to="/home"
                className="hover:text-gray-400 transition-colors"
                activeClassName="text-gray-400"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="hover:text-gray-400 transition-colors"
                activeClassName="text-gray-400"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className="hover:text-gray-400 transition-colors"
                activeClassName="text-gray-400"
              >
                Services
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className="hover:text-gray-400 transition-colors"
                activeClassName="text-gray-400"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Contact Info */}
        <div className="flex flex-col items-center lg:items-end">
          <h3 className="text-lg font-medium">Contact Us</h3>
          <p className="text-sm">Email: contact@yourcompany.com</p>
          <p className="text-sm">Phone: (123) 456-7890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
