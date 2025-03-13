import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import RituColumn, { RituInfo } from '../components/RituColumn';

interface IndexProps {
  ritus: RituInfo[];
}

const Index: React.FC<IndexProps> = ({ ritus }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Preload placeholder images
    const preloadImage = new Image();
    preloadImage.src = "/placeholder.svg";
    
    // Add animation to show the page is loaded
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`
      w-full min-h-screen bg-black/5
      transition-opacity duration-1000 ease-out
      ${isLoaded ? 'opacity-100' : 'opacity-0'}
    `}>
      <Header />
      
      <main className={`
        w-full min-h-[calc(100vh-5rem)] pt-20
        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6
        transition-all duration-500 ease-out
      `}>
        {ritus.map((ritu, index) => (
          <div 
            key={ritu.name}
            className={`
              relative h-[50vh] md:h-[calc(100vh-5rem)]
              transform transition-all duration-500 ease-out
              ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
            `}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <RituColumn ritu={ritu} index={index} />
          </div>
        ))}
      </main>
    </div>
  );
};

export default Index;
