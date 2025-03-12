
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { RituInfo } from '../components/RituColumn';

interface RituDetailProps {
  ritus: RituInfo[];
}

const RituDetail: React.FC<RituDetailProps> = ({ ritus }) => {
  const { ritu } = useParams<{ ritu: string }>();
  const navigate = useNavigate();
  const [isEntering, setIsEntering] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  
  const rituData = ritus.find(r => r.name.toLowerCase() === ritu?.toLowerCase());
  
  useEffect(() => {
    // If ritu is not found, navigate back to home
    if (!rituData) {
      navigate('/');
    }
    
    // Create a reverse animation for entry
    if (rituData) {
      const style = document.createElement('style');
      style.innerHTML = `
        @keyframes column-shrink {
          0% {
            opacity: 1;
            transform: scale(100);
          }
          100% {
            opacity: 0;
            transform: scale(1);
          }
        }
      `;
      document.head.appendChild(style);
      
      // Create full-screen color overlay that shrinks
      const overlay = document.createElement('div');
      overlay.className = 'fixed inset-0 z-40';
      overlay.style.backgroundColor = rituData.color;
      overlay.style.animation = 'column-shrink 0.5s ease-out forwards';
      document.body.appendChild(overlay);
      
      // Remove overlay after animation
      setTimeout(() => {
        document.body.removeChild(overlay);
        setIsEntering(false);
      }, 500);
    }
  }, [rituData, navigate]);

  const handleBackClick = () => {
    setIsExiting(true);
    
    // Create full-screen color overlay
    const overlay = document.createElement('div');
    overlay.className = 'fixed inset-0 z-40';
    overlay.style.backgroundColor = rituData?.color || '#000';
    overlay.style.transform = 'scale(0)';
    overlay.style.opacity = '0';
    overlay.style.animation = 'column-expand 0.5s ease-out forwards';
    document.body.appendChild(overlay);
    
    // Define the animation
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes column-expand {
        0% {
          opacity: 0;
          transform: scale(0);
        }
        100% {
          opacity: 1;
          transform: scale(100);
        }
      }
    `;
    document.head.appendChild(style);
    
    setTimeout(() => {
      navigate('/');
    }, 500);
  };

  if (!rituData) return null;

  return (
    <div 
      className="min-h-screen w-full overflow-hidden"
      style={{ backgroundColor: rituData.color }}
    >
      <Header />
      
      <main className="pt-24 px-8 pb-16 max-w-5xl mx-auto">
        <button 
          onClick={handleBackClick}
          className="mb-8 px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors"
        >
          Back to Seasons
        </button>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <h1 className="text-4xl font-light text-white mb-6">{rituData.name} Chai</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-white/90 text-lg mb-6">{rituData.description}</p>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-light text-white">Characteristics</h2>
                <ul className="list-disc list-inside text-white/90 space-y-2 pl-4">
                  <li>Special ingredients unique to {rituData.name}</li>
                  <li>Traditional preparation methods</li>
                  <li>Ideal serving temperature</li>
                  <li>Recommended pairings</li>
                </ul>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {rituData.images.map((image, idx) => (
                <div key={idx} className="animate-fade-in" style={{ animationDelay: `${idx * 150}ms` }}>
                  <div className="aspect-square rounded-lg overflow-hidden shadow-md">
                    <img 
                      src={image} 
                      alt={`${rituData.name} chai ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RituDetail;
