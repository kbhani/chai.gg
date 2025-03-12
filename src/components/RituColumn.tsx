
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();
  
  // Calculate animation delay based on column index
  const animationDelay = `${index * 100}ms`;
  
  const handleClick = () => {
    setIsClicked(true);
    // Add a fixed div that covers the screen with a barn door animation
    const overlay = document.createElement('div');
    overlay.className = 'fixed inset-0 bg-black z-50';
    overlay.style.animation = 'barn-door-close 0.5s ease-out forwards';
    document.body.appendChild(overlay);
    
    // Navigate after animation completes
    setTimeout(() => {
      navigate(`/ritu/${ritu.name.toLowerCase()}`);
    }, 500);
  };
  
  return (
    <button 
      onClick={handleClick}
      className={`h-screen w-full column-hover-effect block outline-none border-0 ${isClicked ? 'pointer-events-none' : ''}`}
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
    </button>
  );
};

export default RituColumn;
