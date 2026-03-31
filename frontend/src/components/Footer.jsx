import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaPinterest, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-4 md:flex md:justify-between">

        {/* Logo + Info */}
        <div className="mb-6 md:mb-0">
          <Link to="/">
            <img src="/ekart.png" alt="logo" className="w-32" />
          </Link>
          <p className="mt-2 text-sm">
            Powering Your World with the Best in Electronics.
          </p>
          <p className=" mt-2 text-sm">
            123 Electronics St, Style City, NY 10001
          </p>
          <p className="text-sm">Email: support@ekart.com</p>
          <p className="text-sm">Phone: (123) 456-7890</p>
        </div>

        {/* Customer Service */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-semibold">Customer Service</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li>Contact Us</li>
            <li>Shipping & Returns</li>
            <li>FAQs</li>
            <li>Order Tracking</li>
            <li>Size Guide</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <div className="flex space-x-4 mt-2 text-xl">
            <FaFacebook />
            <FaInstagram />
            <FaPinterest />
            <FaTwitterSquare />
          </div>
        </div>

      </div>

      {/* Newsletter */}
      <div className="mt-10 text-center px-4">
        <h3 className="text-xl font-semibold">Stay in the Loop</h3>
        <p className="mt-2 text-sm">
          Subscribe to get special offers, free giveaways, and more!
        </p>

        <form className="mt-4 flex justify-center">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full max-w-sm p-2 rounded-l-md text-gray-900 focus:outline-none"
          />
          <button type="submit" className="bg-pink-600 text-white px-4 rounded-r-md hover:bg-red-700">
            Subscribe</button>
        </form>
      </div>

      {/* Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-pink-600">Ekart</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
