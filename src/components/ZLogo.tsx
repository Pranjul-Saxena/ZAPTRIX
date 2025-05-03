import React, { useState } from 'react';
import { motion, useSpring } from 'framer-motion';

interface ZLogoProps {
  size?: 'sm' | 'md' | 'lg';
}

const ZLogo: React.FC<ZLogoProps> = ({ size = 'md' }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Size mappings
  const sizeClasses = {
    sm: { z: 'text-2xl', text: 'text-xl', svg: 'w-6 h-6' },
    md: { z: 'text-3xl', text: 'text-2xl', svg: 'w-8 h-8' },
    lg: { z: 'text-5xl', text: 'text-4xl', svg: 'w-12 h-12' },
  };
  
  return (
    <motion.div 
      className="relative flex items-center hover-effect"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="flex items-center">
        {/* Lightning Z SVG */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ 
            opacity: isHovered ? 0 : 1,
            scale: isHovered ? 0.8 : 1,
            rotate: isHovered ? 10 : 0,
          }}
          transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
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
          transition={{ duration: 0.4, delay: 0.1, type: "spring", stiffness: 100 }}
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
          x: isHovered ? 15 : 0,
          rotate: isHovered ? 10 : 0
        }}
        transition={{ 
          duration: 0.3, 
          type: "spring", 
          stiffness: 200,
          damping: 15
        }}
      >
        Z
      </motion.span>
      
      {/* Glow effect behind Z */}
      <motion.div
        className="absolute inset-0 rounded-full blur-md opacity-0"
        style={{ backgroundColor: 'rgba(96, 165, 250, 0.3)' }}
        animate={{ 
          opacity: isHovered ? 0.5 : 0,
          scale: isHovered ? 1.2 : 0.8
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default ZLogo; 