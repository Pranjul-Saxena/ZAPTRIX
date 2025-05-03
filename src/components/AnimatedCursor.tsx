import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AnimatedCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  
  // Check if device is touch device
  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    
    checkTouchDevice();
    window.addEventListener('resize', checkTouchDevice);
    
    return () => {
      window.removeEventListener('resize', checkTouchDevice);
    };
  }, []);
  
  // Skip rendering cursor for touch devices
  if (isTouchDevice) {
    return null;
  }
  
  // Update cursor position on mouse move
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', updateMousePosition);
    
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);
  
  // Handle mouse down/up events
  useEffect(() => {
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);
  
  // Handle hoverable elements
  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.hasAttribute('role') ||
        target.classList.contains('hover-effect') ||
        target.closest('[role="button"]')
      ) {
        setIsHovering(true);
      }
    };
    
    const handleMouseOut = () => {
      setIsHovering(false);
    };
    
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    
    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);
  
  return (
    <div className="cursor-wrapper">
      {/* Main cursor dot */}
      <motion.div
        className="fixed w-4 h-4 bg-blue-400 rounded-full pointer-events-none z-[9999] mix-blend-screen"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          backdropFilter: 'blur(1px)',
          WebkitBackdropFilter: 'blur(1px)',
        }}
        animate={{
          scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
          opacity: 0.8,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
        }}
      />
      
      {/* Outer ring */}
      <motion.div
        className="fixed w-12 h-12 border-2 border-purple-400/50 rounded-full pointer-events-none z-[9999] mix-blend-screen"
        style={{
          left: mousePosition.x - 24,
          top: mousePosition.y - 24,
        }}
        animate={{
          scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
          delay: 0.03,
        }}
      />
      
      {/* Trail dots */}
      {[0.1, 0.2, 0.3, 0.4, 0.5].map((delay, index) => (
        <motion.div
          key={index}
          className="fixed w-1 h-1 bg-blue-300 rounded-full pointer-events-none z-[9999] mix-blend-screen"
          style={{
            left: 0,
            top: 0,
          }}
          animate={{
            x: mousePosition.x,
            y: mousePosition.y,
            opacity: 0.7 - delay,
            scale: 1 - delay * 0.5,
          }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 40,
            delay: delay * 0.1,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedCursor; 