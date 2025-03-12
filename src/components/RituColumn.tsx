
import React, { useState } from 'react';
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
    <div 
      className="h-screen column-hover-effect"
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
        
        <div className="flex-1 flex flex-col items-center justify-center gap-8 w-full">
          {ritu.images.map((image, idx) => (
            <div 
              key={idx}
              className="opacity-0 animate-image-appear w-full"
              style={{ 
                animationDelay: `${parseInt(animationDelay) + (idx * 150)}ms`,
                animationPlayState: isHovered ? 'running' : 'paused'
              }}
            >
              <ChaiImage 
                src={image} 
                alt={`${ritu.name} chai ${idx + 1}`} 
                href={`/ritu/${ritu.name.toLowerCase()}/${idx + 1}`} 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RituColumn;
