
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
  }, [rituData, navigate]);

  const handleBackClick = () => {
    setIsExiting(true);
    setTimeout(() => {
      navigate('/');
    }, 500); // Match transition duration
  };

  if (!rituData) return null;

  return (
    <div 
      className="min-h-screen w-full overflow-hidden"
      style={{ backgroundColor: rituData.color }}
    >
      <Header />
      
      <div 
        className={`
          fixed inset-0 bg-black transition-transform duration-500 z-40
          ${isEntering ? 'animate-barn-door-open' : ''}
          ${isExiting ? 'animate-barn-door-close' : ''}
        `}
      />
      
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
