import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export type RituInfo = {
  id: string;
  name: string;
  color: string;
  description: string;
  startMonth: number;
  endMonth: number;
};

interface RituColumnProps {
  ritu: RituInfo;
  index: number;
}

const RituColumn: React.FC<RituColumnProps> = ({ ritu, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isCurrentSeason, setIsCurrentSeason] = useState(false);
  const navigate = useNavigate();
  
  // Calculate animation delay based on column index
  const animationDelay = `${index * 400}ms`;

  useEffect(() => {
    const currentDate = new Date();
    // Use Intl.DateTimeFormat for locale-aware month number
    const formatter = new Intl.DateTimeFormat('en', { month: 'numeric' });
    const currentMonth = parseInt(formatter.format(currentDate));

    // Check if current month falls within this ritu's months
    const isCurrentRitu = (ritu.startMonth <= ritu.endMonth)
      ? (currentMonth >= ritu.startMonth && currentMonth <= ritu.endMonth)
      : (currentMonth >= ritu.startMonth || currentMonth <= ritu.endMonth);

    setIsCurrentSeason(isCurrentRitu);
  }, [ritu.startMonth, ritu.endMonth]);
  
  const handleClick = () => {
    setIsClicked(true);
    
    // Create a column-specific overlay that matches the column's position
    const columnElement = document.getElementById(`ritu-column-${index}`);
    if (columnElement) {
      const rect = columnElement.getBoundingClientRect();
      
      const overlay = document.createElement('div');
      overlay.className = 'fixed z-[90] transition-transform duration-1000 ease-in-out';
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
      }, 1500);
    }
    
    // Navigate after animation completes
    setTimeout(() => {
      navigate(`/ritu/${ritu.id}`);
    }, 800);
  };
  
  return (
    <button 
      id={`ritu-column-${index}`}
      onClick={handleClick}
      className={`
        w-full h-full relative overflow-hidden
        transition-all duration-700 ease-in-out
        hover:shadow-2xl focus:outline-none
        ${isClicked ? 'pointer-events-none' : ''}
        ${isHovered ? 'z-10' : 'z-0'}
        group
      `}
      style={{ 
        backgroundColor: ritu.color,
        animationDelay: animationDelay,
        opacity: isCurrentSeason ? 1 : 0.55,
        transition: 'opacity 0.8s ease-in-out, transform 0.8s ease-out, background-color 0.8s ease-out',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated border for current season */}
      {isCurrentSeason && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 border-[4px] border-black/40 animate-[pulse_2s_ease-in-out_infinite]"></div>
          {/* Animated corner accents */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t-[4px] border-l-[4px] border-black/60 animate-[pulse_2s_ease-in-out_infinite]"></div>
          <div className="absolute top-0 right-0 w-12 h-12 border-t-[4px] border-r-[4px] border-black/60 animate-[pulse_2s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-0 left-0 w-12 h-12 border-b-[4px] border-l-[4px] border-black/60 animate-[pulse_2s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-[4px] border-r-[4px] border-black/60 animate-[pulse_2s_ease-in-out_infinite]"></div>
        </div>
      )}

      {/* Recommended badge */}
      {isCurrentSeason && (
        <div className="absolute top-6 left-0 w-full flex justify-center">
          <div className="
            bg-black/10 backdrop-blur-sm px-3 py-1 rounded-full
            text-xs font-medium text-black/90
            transform animate-fade-in
          ">
            Recommended for this season
          </div>
        </div>
      )}

      {/* Left gradient border */}
      <div 
        className={`
          absolute left-0 top-0 w-[2px] h-full
          transition-all duration-800 ease-in-out
          ${isCurrentSeason ? 'opacity-70' : 'opacity-50'}
          group-hover:opacity-0
        `}
        style={{
          background: `linear-gradient(to right, ${ritu.color}00, ${ritu.color})`
        }}
      />
      
      {/* Right gradient border */}
      <div 
        className={`
          absolute right-0 top-0 w-[2px] h-full
          transition-all duration-800 ease-in-out
          ${isCurrentSeason ? 'opacity-70' : 'opacity-50'}
          group-hover:opacity-0
        `}
        style={{
          background: `linear-gradient(to left, ${ritu.color}00, ${ritu.color})`
        }}
      />

      <div className={`
        h-full flex flex-col justify-center items-center px-4 py-20
        transition-all duration-800 ease-out
        ${isHovered ? 'scale-110' : 'scale-100'}
      `}>
        <div 
          className={`
            transform transition-all duration-800 ease-out
            animate-fade-in mb-8
            ${isHovered ? 'translate-y-0 scale-110' : 'translate-y-0 scale-100'}
          `}
          style={{ 
            animationDelay: animationDelay,
            opacity: 1,
            transition: 'transform 0.8s ease-out 0.1s, scale 0.8s ease-out 0.1s'
          }}
        >
          {/* Add padding to the text container */}
          <div className="px-4">
            <h2 className="text-2xl font-light text-black tracking-wider uppercase">{ritu.name}</h2>
            {isHovered && (
              <p className="text-black/80 text-sm mt-2 max-w-xs text-center animate-fade-in">
                {ritu.description.split('.')[0]}.
              </p>
            )}
          </div>
        </div>
      </div>
    </button>
  );
};

export default RituColumn;