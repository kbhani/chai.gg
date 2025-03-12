
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full h-20 flex justify-center items-center px-8 fixed top-0 left-0 z-50 glass-effect">
      <div className="flex items-center gap-2">
        <span className="text-3xl font-extralight tracking-tight">Ritu</span>
        <span className="text-3xl font-medium tracking-tight">Chai</span>
      </div>
    </header>
  );
};

export default Header;
