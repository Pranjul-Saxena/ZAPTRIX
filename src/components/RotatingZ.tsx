import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const RotatingZ: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [isHovered, setIsHovered] = useState(false);
  const zRef = useRef<HTMLDivElement>(null);
  
  // Motion values for rotation with spring physics for smoother motion
  const rotateX = useSpring(0, { stiffness: 100, damping: 30 });
  const rotateY = useSpring(0, { stiffness: 100, damping: 30 });
  const scale = useSpring(1, { stiffness: 200, damping: 30 });
  
  // Transform rotation based on mouse position
  const transformedRotateX = useTransform(
    rotateX,
    [-1, 1],
    isHovered ? [-25, 25] : [-15, 15]
  );
  
  const transformedRotateY = useTransform(
    rotateY,
    [-1, 1],
    isHovered ? [25, -25] : [15, -15]
  );
  
  // Update window size on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized mouse position (-1 to 1)
      const x = (e.clientX / windowSize.width) * 2 - 1;
      const y = (e.clientY / windowSize.height) * 2 - 1;
      
      setMousePosition({ x, y });
      
      // Smoothly animate to new values using spring physics
      rotateX.set(y);
      rotateY.set(x);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [windowSize, rotateX, rotateY]);
  
  // Handle hover effects
  const handleMouseEnter = () => {
    setIsHovered(true);
    scale.set(1.2);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    scale.set(1);
  };
  
  // Auto rotation effect when not interacting
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    
    if (!isHovered) {
      // Create a gentle auto-rotation effect when not being hovered
      let t = 0;
      intervalId = setInterval(() => {
        t += 0.01;
        const rotX = Math.sin(t) * 0.5;
        const rotY = Math.cos(t) * 0.5;
        rotateX.set(rotX);
        rotateY.set(rotY);
      }, 50);
    }
    
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isHovered, rotateX, rotateY]);
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-0 overflow-hidden">
      <motion.div
        ref={zRef}
        style={{
          rotateX: transformedRotateX,
          rotateY: transformedRotateY,
          scale,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        className="relative hover-effect"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.svg 
          width="600" 
          height="600" 
          viewBox="0 0 24 24" 
          className={`${isHovered ? 'opacity-20' : 'opacity-5'} transition-all duration-300 ${isHovered ? 'thunder-animation' : ''}`}
        >
          <motion.path 
            d="M13 3L4 14H11L9 21L18 10H11L13 3Z" 
            fill="url(#blue-purple-gradient)" 
            stroke="url(#blue-purple-gradient)" 
            strokeWidth={isHovered ? 1 : 0.5}
            strokeLinecap="round" 
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ 
              pathLength: isHovered ? [0, 1, 1] : 1,
              transition: { 
                duration: 2,
                ease: "easeInOut",
                repeat: isHovered ? Infinity : 0,
                repeatType: "loop" 
              }
            }}
          />
          <defs>
            <linearGradient id="blue-purple-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60A5FA">
                <animate 
                  attributeName="stop-color" 
                  values="#60A5FA; #A855F7; #60A5FA" 
                  dur="4s" 
                  repeatCount="indefinite" 
                />
              </stop>
              <stop offset="100%" stopColor="#A855F7">
                <animate 
                  attributeName="stop-color" 
                  values="#A855F7; #60A5FA; #A855F7" 
                  dur="4s" 
                  repeatCount="indefinite" 
                />
              </stop>
            </linearGradient>
          </defs>
        </motion.svg>
        
        {/* Glow effect */}
        <div 
          className={`absolute inset-0 bg-blue-400 rounded-full blur-3xl opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-10' : ''}`}
          style={{
            filter: 'blur(40px)',
            transform: 'scale(0.8)',
          }}
        />
      </motion.div>
    </div>
  );
};

export default RotatingZ; 