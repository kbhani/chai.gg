
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
    
    // Create a column-specific overlay that matches the column's position
    const columnElement = document.getElementById(`ritu-column-${index}`);
    if (columnElement) {
      const rect = columnElement.getBoundingClientRect();
      
      const overlay = document.createElement('div');
      overlay.className = 'fixed z-50';
      overlay.style.backgroundColor = ritu.color;
      overlay.style.top = `${rect.top}px`;
      overlay.style.left = `${rect.left}px`;
      overlay.style.width = `${rect.width}px`;
      overlay.style.height = `${rect.height}px`;
      overlay.style.animation = 'column-expand 0.5s ease-out forwards';
      
      document.body.appendChild(overlay);
      
      // Define the animation
      const style = document.createElement('style');
      style.innerHTML = `
        @keyframes column-expand {
          0% {
            transform: scaleX(1) scaleY(1);
            transform-origin: left;
          }
          100% {
            transform: scaleX(100) scaleY(100);
            transform-origin: left;
          }
        }
      `;
      document.head.appendChild(style);
    }
    
    // Navigate after animation completes
    setTimeout(() => {
      navigate(`/ritu/${ritu.name.toLowerCase()}`);
    }, 500);
  };
  
  return (
    <button 
      id={`ritu-column-${index}`}
      onClick={handleClick}
      className={`w-full h-full column-hover-effect block outline-none border-0 md:h-screen ${isClicked ? 'pointer-events-none' : ''}`}
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
