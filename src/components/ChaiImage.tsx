
import React from 'react';
import { Link } from 'react-router-dom';

interface ChaiImageProps {
  src: string;
  alt: string;
  href: string;
}

const ChaiImage: React.FC<ChaiImageProps> = ({ src, alt, href }) => {
  return (
    <Link to={href} className="block w-full">
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
    </Link>
  );
};

export default ChaiImage;
