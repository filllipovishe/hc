
import React, { useState, useEffect } from 'react';
import DesktopLayout from './components/DesktopLayout';
import MobileLayout from './components/MobileLayout';

const App: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={isMobile ? 'mobile-scaling min-h-screen bg-white text-[#223442]' : 'desktop-scaling min-h-screen bg-white text-[#223442]'}>
      {isMobile ? <MobileLayout /> : <DesktopLayout />}
    </div>
  );
};

export default App;
