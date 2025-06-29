import React from 'react';
import { Box } from '@mui/material';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgressIndicator = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* Top Progress Bar */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #00d4ff, #ff6b35, #39ff14, #ff1493)',
          transformOrigin: '0%',
          scaleX,
          zIndex: 9999,
          boxShadow: '0 0 10px rgba(0, 212, 255, 0.5)',
        }}
      />
      
      {/* Circular Progress Indicator */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 30,
          right: 30,
          width: 60,
          height: 60,
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          border: '2px solid rgba(255, 255, 255, 0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'scale(1.1)',
            background: 'rgba(255, 255, 255, 0.15)',
          }
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg width="30" height="30" viewBox="0 0 30 30">
          <motion.circle
            cx="15"
            cy="15"
            r="12"
            fill="none"
            stroke="rgba(255, 255, 255, 0.3)"
            strokeWidth="2"
          />
          <motion.circle
            cx="15"
            cy="15"
            r="12"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="2"
            strokeLinecap="round"
            style={{
              pathLength: scrollYProgress
            }}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: scrollYProgress }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00d4ff" />
              <stop offset="50%" stopColor="#ff6b35" />
              <stop offset="100%" stopColor="#39ff14" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Up Arrow */}
        <Box
          sx={{
            position: 'absolute',
            color: 'white',
            fontSize: '14px',
            fontWeight: 'bold',
          }}
        >
          ↑
        </Box>
      </Box>
    </>
  );
};

export default ScrollProgressIndicator;
