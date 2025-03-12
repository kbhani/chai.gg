
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import RituColumn, { RituInfo } from '../components/RituColumn';

interface IndexProps {
  ritus: RituInfo[];
}

const Index: React.FC<IndexProps> = ({ ritus }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Preload placeholder images
  useEffect(() => {
    const preloadImage = new Image();
    preloadImage.src = "/placeholder.svg";
    
    // Add animation to show the page is loaded
    setIsLoaded(true);
  }, []);

  return (
    <div className={`w-full h-screen overflow-hidden ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
      <Header />
      
      <main className="w-full h-screen pt-20 flex flex-row">
        {ritus.map((ritu, index) => (
          <div 
            key={index} 
            className="flex-1 column-transition" 
          >
            <RituColumn ritu={ritu} index={index} />
          </div>
        ))}
      </main>
    </div>
  );
};

export default Index;
