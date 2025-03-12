
import React, { useEffect } from 'react';
import Header from '../components/Header';
import RituColumn, { RituInfo } from '../components/RituColumn';

const ritus: RituInfo[] = [
  {
    name: "Vasant",
    color: "#7FD1AE", // Spring - fresh green
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    description: "Spring season chai"
  },
  {
    name: "Grishma",
    color: "#FFCC66", // Summer - warm yellow
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    description: "Summer season chai"
  },
  {
    name: "Varsha",
    color: "#5DA9E9", // Monsoon - blue
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    description: "Monsoon season chai"
  },
  {
    name: "Sharad",
    color: "#FF9F6B", // Autumn - orange
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    description: "Autumn season chai"
  },
  {
    name: "Hemant",
    color: "#B690E3", // Pre-winter - purple
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    description: "Pre-winter season chai"
  },
  {
    name: "Shishir",
    color: "#A8D1E7", // Winter - ice blue
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    description: "Winter season chai"
  }
];

const Index: React.FC = () => {
  // Preload placeholder images
  useEffect(() => {
    const preloadImage = new Image();
    preloadImage.src = "/placeholder.svg";
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden">
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
