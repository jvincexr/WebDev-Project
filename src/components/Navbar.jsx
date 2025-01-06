import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Logo from '../assets/logo.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1024px] mx-auto px-4 text-black">
      <img src={Logo} alt="" className="h-12" />
      <ul className="hidden md:flex">
        <li className="p-4">
          <a href="#content1">Home</a>
        </li>
        <li className="p-4">
          <a href="#youtubevid">Discover</a>
        </li>
        <li className="p-4">
          <a href="#about">About</a>
        </li>
        <li className="p-4">
          <a href="#artworks">Artworks</a>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? (
          <AiOutlineClose size={20} className="navbar-icon" />
        ) : (
          <AiOutlineMenu size={20} className="navbar-icon" />
        )}
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#eee9da] text-black ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <img src={Logo} alt="" className="h-12 m-4" />
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600">
            <a href="#content1">Home</a>
          </li>
          <li className="p-4 border-b border-gray-600">
            <a href="#youtubevid">Discover</a>
          </li>
          <li className="p-4 border-b border-gray-600">
            <a href="#about">About</a>
          </li>
          <li className="p-4">
            <a href="#artworks">Artworks</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
