import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-red-400 p-4">
      <div className="flex items-center justify-evenly w-screen mx-auto">
        <div className="text-white font-bold">Harsh</div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-green-700 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <div className={`lg:flex ${isOpen ? 'block' : 'hidden'} w-full lg:w-auto`}>
          <ul className="lg:flex lg:items-center">
            <li className="lg:mr-6 mb-2 lg:mb-0">
              <Link to="/" className="text-white hover:text-black">Home</Link>
            </li>
            <li className="lg:mr-6 mb-2 lg:mb-0">
              <Link to="/signin" className="text-white hover:text-black">Signin</Link>
            </li>
            <li className="lg:mr-6 mb-2 lg:mb-0">
              <Link to="/signup" className="text-white hover:text-black">SignUp</Link>
            </li>
            <li className="lg:mr-6 mb-2 lg:mb-0">
              <Link to="/contact" className="text-white hover:text-black">Contact</Link>
            </li>
            <li className="lg:mr-6 mb-2 lg:mb-0">
              <Link to="/profile" className="text-white hover:text-black">Profile</Link>
            </li>
            <li className="lg:mr-6 mb-2 lg:mb-0">
              <Link to="/admin" className="text-white hover:text-black">Admin</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
