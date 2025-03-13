import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { RituInfo } from '../data/ingredients';

interface RituDetailProps {
  ritus: RituInfo[];
}

const RituDetail: React.FC<RituDetailProps> = ({ ritus }) => {
  const { rituId } = useParams<{ rituId: string }>();
  const navigate = useNavigate();
  const [isEntering, setIsEntering] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  
  const rituData = ritus.find(r => r.id === rituId);
  
  useEffect(() => {
    let mounted = true;

    const setupAnimation = async () => {
      // If ritu is not found and component is still mounted, navigate back to home
      if (!rituData && mounted) {
        navigate('/', { replace: true });
        return;
      }
      
      if (rituData && mounted) {
        // Create a reverse animation for entry
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
          if (mounted) {
            document.body.removeChild(overlay);
            setIsEntering(false);
          }
        }, 500);
      }
    };

    setupAnimation();

    return () => {
      mounted = false;
    };
  }, [rituData, navigate]);

  const handleBackClick = () => {
    setIsExiting(true);
    
    // Remove any existing overlays first
    const existingOverlays = document.querySelectorAll('.transition-overlay');
    existingOverlays.forEach(overlay => overlay.remove());
    
    // Create full-screen color overlay
    const overlay = document.createElement('div');
    overlay.className = 'fixed inset-0 z-[90] transition-overlay';
    overlay.style.backgroundColor = rituData?.color || '#000';
    overlay.style.transform = 'scale(0)';
    overlay.style.opacity = '0';
    overlay.style.transition = 'transform 0.5s ease-out, opacity 0.5s ease-out';
    document.body.appendChild(overlay);
    
    // Trigger the animation
    requestAnimationFrame(() => {
      overlay.style.transform = 'scale(100)';
      overlay.style.opacity = '1';
    });
    
    // Clean up and navigate
    setTimeout(() => {
      overlay.remove();
      navigate('/', { replace: true });
    }, 500);
  };

  if (!rituData) return null;

  const getMonthName = (month: number) => {
    return new Date(2024, month - 1).toLocaleString('default', { month: 'long' });
  };

  return (
    <div 
      className="min-h-screen w-full overflow-x-hidden pb-32"
      style={{ backgroundColor: rituData.color }}
    >
      <Header />
      
      <main className="pt-24 px-8 max-w-4xl mx-auto">
        <button 
          onClick={handleBackClick}
          className="mb-8 px-4 py-2 bg-black/10 rounded-full backdrop-blur-sm hover:bg-black/20 transition-colors text-black/90"
        >
          Back to Seasons
        </button>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <h1 className="text-4xl font-light text-black">{rituData.name}</h1>
            <div className="text-black/80 text-lg font-light">
              {getMonthName(rituData.startMonth)} - {getMonthName(rituData.endMonth)}
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <p className="text-black/90 text-lg leading-relaxed">{rituData.description}</p>
            </div>
            
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-light text-black mb-4">Ingredients</h2>
                <ul className="list-none space-y-2">
                  {rituData.ingredients.map((ingredient, idx) => (
                    <li 
                      key={idx} 
                      className="flex items-center text-black/90 animate-fade-in"
                      style={{ animationDelay: `${idx * 50}ms` }}
                    >
                      <span className="w-2 h-2 bg-black/30 rounded-full mr-3" />
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-6 bg-black/5 backdrop-blur-sm rounded-lg border border-black/10">
                <h3 className="text-xl font-light text-black mb-3">Preparation Note</h3>
                <p className="text-black/90 text-base leading-relaxed">
                  {rituData.specialNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RituDetail;
