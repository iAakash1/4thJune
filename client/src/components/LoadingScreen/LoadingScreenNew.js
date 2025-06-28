import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreenNew = () => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('');
  
  useEffect(() => {
    const texts = [
      'Initializing creativity...',
      'Loading innovations...',
      'Preparing magic...',
      'Almost ready...',
    ];

    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 15;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 200);

    const textInterval = setInterval(() => {
      setLoadingText(texts[Math.floor(Math.random() * texts.length)]);
    }, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(textInterval);
    };
  }, []); // Fixed: texts array moved inside useEffect for ESLint compliance

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
        }}
      >
        {/* Animated logo */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ marginBottom: 40 }}
        >
          <Box
            sx={{
              width: 80,
              height: 80,
              background: 'linear-gradient(45deg, #667eea, #764ba2)',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 50px rgba(102, 126, 234, 0.5)',
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: 'white',
                fontWeight: 800,
                textShadow: '0 0 20px rgba(255, 255, 255, 0.5)',
              }}
            >
              A
            </Typography>
          </Box>
        </motion.div>

        {/* Loading text with typewriter effect */}
        <motion.div
          key={loadingText}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h5"
            sx={{
              color: '#e2e8f0',
              mb: 4,
              textAlign: 'center',
              fontWeight: 500,
            }}
          >
            {loadingText}
          </Typography>
        </motion.div>

        {/* Progress bar */}
        <Box
          sx={{
            width: 300,
            height: 4,
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: 2,
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <motion.div
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
            style={{
              height: '100%',
              background: 'linear-gradient(90deg, #667eea, #764ba2)',
              borderRadius: 2,
              boxShadow: '0 0 20px rgba(102, 126, 234, 0.5)',
            }}
          />
          
          {/* Shimmer effect */}
          <motion.div
            animate={{
              x: [-100, 300],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              position: 'absolute',
              top: 0,
              width: 100,
              height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
            }}
          />
        </Box>

        {/* Progress percentage */}
        <Typography
          variant="body2"
          sx={{
            color: '#94a3b8',
            mt: 2,
            fontFamily: 'monospace',
          }}
        >
          {Math.floor(progress)}%
        </Typography>

        {/* Floating particles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i % 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            style={{
              position: 'absolute',
              width: 4,
              height: 4,
              background: `hsl(${220 + Math.random() * 40}, 70%, 60%)`,
              borderRadius: '50%',
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
              boxShadow: `0 0 10px hsl(${220 + Math.random() * 40}, 70%, 60%)`,
            }}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreenNew;
