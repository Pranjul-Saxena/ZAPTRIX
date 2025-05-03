import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedCursor from '../components/AnimatedCursor';

const RootLayout: React.FC = () => {
  // Add effect to set cursor style
  useEffect(() => {
    // Add cursor-none to the body element when component mounts
    document.body.classList.add('cursor-none');
    
    // Cleanup function
    return () => {
      document.body.classList.remove('cursor-none');
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <AnimatedCursor />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout; 