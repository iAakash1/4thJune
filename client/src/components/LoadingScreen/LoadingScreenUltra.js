import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './LoadingScreenUltra.css';

const LoadingScreenUltra = () => {
  const [loadingText, setLoadingText] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const texts = [
      'Initializing Experience...',
      'Loading Components...',
      'Crafting Magic...',
      'Almost Ready...',
      'Welcome!'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    
    const typeText = () => {
      if (textIndex < texts.length) {
        if (charIndex < texts[textIndex].length) {
          setLoadingText(texts[textIndex].substring(0, charIndex + 1));
          charIndex++;
          setTimeout(typeText, 100);
        } else {
          setTimeout(() => {
            textIndex++;
            charIndex = 0;
            if (textIndex < texts.length) {
              setTimeout(typeText, 500);
            }
          }, 1000);
        }
      }
    };

    typeText();

    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 200);

    return () => clearInterval(progressInterval);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="loading-screen-ultra"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated Background Particles */}
        <div className="loading-particles">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="loading-particle"
              initial={{ 
                opacity: 0,
                scale: 0,
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight
              }}
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Main Loading Content */}
        <div className="loading-content">
          {/* Animated Logo/Brand */}
          <motion.div
            className="loading-logo"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              duration: 1.5, 
              ease: "easeOut",
              type: "spring",
              stiffness: 100
            }}
          >
            <motion.div
              className="logo-circle"
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <div className="logo-inner">
                <span>AJ</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Loading Text */}
          <motion.h1
            className="loading-title"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            {loadingText}
            <motion.span
              className="cursor"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              |
            </motion.span>
          </motion.h1>

          {/* Progress Bar */}
          <div className="progress-container">
            <motion.div
              className="progress-bar"
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
            <div className="progress-glow" />
          </div>

          {/* Progress Text */}
          <motion.p
            className="progress-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            {Math.min(Math.floor(progress), 100)}%
          </motion.p>
        </div>

        {/* Floating Orbs */}
        <div className="floating-loading-orbs">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="loading-orb"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0.3, 0.8, 0.3],
                scale: [0.8, 1.2, 0.8],
                x: [0, Math.random() * 100 - 50, 0],
                y: [0, Math.random() * 100 - 50, 0]
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
              style={{
                left: `${15 + (i * 15)}%`,
                top: `${30 + Math.random() * 40}%`,
              }}
            />
          ))}
        </div>

        {/* DNA Helix Animation */}
        <div className="dna-container">
          <div className="dna-helix">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="dna-strand"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: i * 0.1,
                  duration: 0.5,
                  ease: "easeOut"
                }}
                style={{
                  top: `${i * 5}%`,
                  transform: `rotateZ(${i * 18}deg)`
                }}
              >
                <div className="dna-dot left" />
                <div className="dna-dot right" />
                <div className="dna-connection" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreenUltra;
