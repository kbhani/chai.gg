
import React from 'react';

interface ChaiImageProps {
  src: string;
  alt: string;
}

const ChaiImage: React.FC<ChaiImageProps> = ({ src, alt }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-md image-hover-effect soft-shadow">
      <div className="aspect-square bg-white/10 backdrop-blur flex items-center justify-center">
        <img 
          src={src || "/placeholder.svg"} 
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default ChaiImage;
