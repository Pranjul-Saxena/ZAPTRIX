import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedCursor from '../components/AnimatedCursor';

const RootLayout: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      const isTouchCapable = 
        'ontouchstart' in window || 
        navigator.maxTouchPoints > 0 || 
        window.matchMedia('(pointer: coarse)').matches ||
        window.matchMedia('(max-width: 768px)').matches;
      
      setIsMobile(isTouchCapable);
      
      // Only add cursor-none on non-touch devices
      if (!isTouchCapable) {
        document.body.classList.add('cursor-none');
      } else {
        document.body.classList.remove('cursor-none');
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      document.body.classList.remove('cursor-none');
    };
  }, []);
  
  // Prevent zoom on double tap in touch devices
  useEffect(() => {
    if (isMobile) {
      // Add meta viewport tag to prevent zooming
      const viewportMeta = document.createElement('meta');
      viewportMeta.name = 'viewport';
      viewportMeta.content = 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no';
      document.head.appendChild(viewportMeta);
      
      return () => {
        document.head.removeChild(viewportMeta);
      };
    }
  }, [isMobile]);
  
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {!isMobile && <AnimatedCursor />}
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout; 