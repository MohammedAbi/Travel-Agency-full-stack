import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
  };

  return (
    <nav className="fixed m-4 top-0 right-0 left-0 shadow-lg z-50 bg-white">
      <div className="container px-4 flex justify-between items-center h-16">
        <h3 className="text-2xl font-bold">Travel</h3>
        <div className="hidden md:flex space-x-4 text-sm font-bold items-center">
          <Link to="/" className="px-6 py-2 hover:bg-gray-600 hover:text-white">
            Home
          </Link>
          <Link
            to="/gallery"
            className="px-6 py-2 hover:bg-gray-600 hover:text-white"
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            className="px-6 py-2 hover:bg-gray-600 hover:text-white"
          >
            Contact
          </Link>
          <Link
            to="/about"
            className="px-6 py-2 hover:bg-gray-600 hover:text-white"
          >
            About
          </Link>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="py-2 px-6 bg-red-500 text-white border"
            >
              Logout
            </button>
          ) : (
            <Link to="/login" className="py-2 px-6 bg-gray-300 border">
              Login
            </Link>
          )}
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col bg-white space-y-6 py-4 items-center">
          <Link to="/" className="px-6 py-2 hover:bg-gray-600 hover:text-white">
            Home
          </Link>
          <Link
            to="/gallery"
            className="px-6 py-2 hover:bg-gray-600 hover:text-white"
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            className="px-6 py-2 hover:bg-gray-600 hover:text-white"
          >
            Contact
          </Link>
          <Link
            to="/about"
            className="px-6 py-2 hover:bg-gray-600 hover:text-white"
          >
            About
          </Link>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="py-2 px-6 bg-red-500 text-white border"
            >
              Logout
            </button>
          ) : (
            <Link to="/login" className="py-2 px-6 bg-gray-300 border">
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
