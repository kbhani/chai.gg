import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="
      w-full h-20 fixed top-0 left-0 z-[100]
      flex justify-center items-center px-8
      bg-white/10 backdrop-blur-md
      border-b border-white/10
      transition-all duration-500 ease-out
      hover:bg-white/20
    ">
      <Link 
        to="/" 
        className="
          flex items-center gap-2 
          transition-all duration-300 ease-out
          hover:scale-105 hover:gap-3
        "
      >
        <span className="text-3xl font-extralight tracking-tight text-gray-800">Ritu</span>
        <span className="text-3xl font-medium tracking-tight text-gray-900">Chai</span>
      </Link>
    </header>
  );
};

export default Header;
