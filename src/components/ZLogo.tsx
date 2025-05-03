import React, { useState, useEffect, useRef } from 'react';
import { motion, useSpring } from 'framer-motion';

interface ZLogoProps {
  size?: 'sm' | 'md' | 'lg';
}

const ZLogo: React.FC<ZLogoProps> = ({ size = 'md' }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const logoRef = useRef<HTMLDivElement>(null);
  
  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Size mappings
  const sizeClasses = {
    sm: { z: 'text-2xl', text: 'text-xl', svg: 'w-6 h-6' },
    md: { z: 'text-3xl', text: 'text-2xl', svg: 'w-8 h-8' },
    lg: { z: 'text-5xl', text: 'text-4xl', svg: 'w-12 h-12' },
  };
  
  // Make sure hover state is cleared when mouse leaves window
  useEffect(() => {
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
    
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);
  
  // Handle touch events for mobile
  const handleTouchStart = () => {
    setIsHovered(true);
  };
  
  const handleTouchEnd = () => {
    setIsHovered(false);
  };
  
  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsHovered(true);
    }
  };
  
  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsHovered(false);
    }
  };
  
  return (
    <motion.div 
      ref={logoRef}
      className="relative flex items-center hover-effect z-20"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="flex items-center">
        {/* Lightning Z SVG */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ 
            opacity: isHovered ? 0 : 1,
            scale: isHovered ? 0.8 : 1,
            rotate: isHovered ? (isMobile ? 5 : 10) : 0,
          }}
          transition={{ 
            duration: isMobile ? 0.2 : 0.3, 
            type: "spring", 
            stiffness: isMobile ? 300 : 200 
          }}
          className={`${sizeClasses[size].svg} text-blue-400 ${isHovered ? 'thunder-animation' : ''}`}
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M13 3L4 14H11L9 21L18 10H11L13 3Z" 
              fill="currentColor" 
              stroke="currentColor" 
              strokeWidth="1"
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
        
        {/* Full ZAPTRIX text that appears on hover */}
        <motion.span 
          className={`font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent ml-1 ${sizeClasses[size].text}`}
          initial={{ opacity: 0, width: 0, x: -10 }}
          animate={{ 
            opacity: isHovered ? 1 : 0, 
            width: isHovered ? 'auto' : 0,
            x: isHovered ? 0 : -10
          }}
          transition={{ 
            duration: isMobile ? 0.3 : 0.4, 
            delay: isMobile ? 0 : 0.1, 
            type: "spring", 
            stiffness: isMobile ? 150 : 100 
          }}
        >
          ZAPTRIX
        </motion.span>
      </div>
      
      {/* Z character that shows initially */}
      <motion.span 
        className={`absolute font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent ${sizeClasses[size].z}`}
        initial={{ opacity: 1 }}
        animate={{ 
          opacity: isHovered ? 0 : 1,
          x: isHovered ? (isMobile ? 10 : 15) : 0,
          rotate: isHovered ? (isMobile ? 5 : 10) : 0
        }}
        transition={{ 
          duration: isMobile ? 0.2 : 0.3, 
          type: "spring", 
          stiffness: isMobile ? 300 : 200,
          damping: isMobile ? 20 : 15
        }}
      >
        Z
      </motion.span>
      
      {/* Glow effect behind Z - reduced on mobile */}
      <motion.div
        className="absolute inset-0 rounded-full blur-md opacity-0"
        style={{ backgroundColor: 'rgba(96, 165, 250, 0.3)' }}
        animate={{ 
          opacity: isHovered ? (isMobile ? 0.3 : 0.5) : 0,
          scale: isHovered ? (isMobile ? 1.1 : 1.2) : 0.8
        }}
        transition={{ duration: isMobile ? 0.2 : 0.3 }}
      />
      
      {/* Invisible hit area to improve hover detection */}
      <div 
        className="absolute inset-0 -m-2 cursor-pointer"
        style={{ zIndex: -1 }}
      />
    </motion.div>
  );
};

export default ZLogo; 