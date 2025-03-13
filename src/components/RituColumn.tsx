import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export type RituInfo = {
  name: string;
  color: string;
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
      overlay.className = 'fixed z-[90] transition-transform duration-500 ease-out';
      overlay.style.backgroundColor = ritu.color;
      overlay.style.top = `${rect.top}px`;
      overlay.style.left = `${rect.left}px`;
      overlay.style.width = `${rect.width}px`;
      overlay.style.height = `${rect.height}px`;
      overlay.style.transform = 'scale(1)';
      
      document.body.appendChild(overlay);
      
      // Trigger the expansion animation
      requestAnimationFrame(() => {
        overlay.style.transform = 'scale(100)';
      });

      // Clean up the overlay after navigation
      setTimeout(() => {
        document.body.removeChild(overlay);
      }, 1000);
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
      className={`
        w-full h-full relative overflow-hidden
        transition-all duration-500 ease-out
        hover:shadow-2xl focus:outline-none
        ${isClicked ? 'pointer-events-none' : ''}
        ${isHovered ? 'z-10' : 'z-0'}
        group
      `}
      style={{ 
        backgroundColor: ritu.color,
        animationDelay: animationDelay,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Left gradient border */}
      <div 
        className="absolute left-0 top-0 w-[2px] h-full opacity-50 group-hover:opacity-0 transition-opacity duration-300"
        style={{
          background: `linear-gradient(to right, ${ritu.color}00, ${ritu.color})`
        }}
      />
      
      {/* Right gradient border */}
      <div 
        className="absolute right-0 top-0 w-[2px] h-full opacity-50 group-hover:opacity-0 transition-opacity duration-300"
        style={{
          background: `linear-gradient(to left, ${ritu.color}00, ${ritu.color})`
        }}
      />

      <div className={`
        h-full flex flex-col justify-center items-center px-4 py-20
        transition-all duration-500 ease-out
        ${isHovered ? 'scale-110' : 'scale-100'}
      `}>
        <div 
          className={`
            transform transition-all duration-500 ease-out
            opacity-0 animate-fade-in mb-8
            ${isHovered ? 'translate-y-0' : 'translate-y-4'}
          `}
          style={{ animationDelay: animationDelay }}
        >
          <h2 className="text-2xl font-light text-black tracking-wider uppercase">{ritu.name}</h2>
          {isHovered && (
            <p className="text-black/80 text-sm mt-2 max-w-xs text-center animate-fade-in">
              {ritu.description.split('.')[0]}.
            </p>
          )}
        </div>
      </div>
    </button>
  );
};

export default RituColumn;
