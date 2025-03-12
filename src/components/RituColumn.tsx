
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ChaiImage from './ChaiImage';

export type RituInfo = {
  name: string;
  color: string;
  images: string[];
  description: string;
};

interface RituColumnProps {
  ritu: RituInfo;
  index: number;
}

const RituColumn: React.FC<RituColumnProps> = ({ ritu, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Calculate animation delay based on column index
  const animationDelay = `${index * 100}ms`;
  
  return (
    <Link 
      to={`/ritu/${ritu.name.toLowerCase()}`} 
      className="h-screen column-hover-effect block"
      style={{ 
        backgroundColor: ritu.color,
        animationDelay: animationDelay,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-full flex flex-col justify-center items-center px-4 py-20">
        <div 
          className="opacity-0 animate-fade-in mb-8" 
          style={{ animationDelay: animationDelay }}
        >
          <h2 className="text-xl font-light text-white tracking-wider uppercase">{ritu.name}</h2>
        </div>
      </div>
    </Link>
  );
};

export default RituColumn;
