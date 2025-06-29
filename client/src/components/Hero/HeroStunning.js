import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Typed from 'typed.js';
import './Hero.css';

const HeroStunning = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Mouse tracking for 3D effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 100, damping: 30 });
  
  // Transform mouse position to rotation
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], ["-10deg", "10deg"]);

  useEffect(() => {
    // Enhanced Typed.js configuration
    const typed = new Typed(textRef.current, {
      strings: [
        'Full Stack Developer',
        'React Specialist',
        'UI/UX Designer',
        'Problem Solver',
        'Innovation Creator'
      ],
      typeSpeed: 80,
      backSpeed: 60,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: '|',
      fadeOut: true,
      fadeOutClass: 'typed-fade-out',
      fadeOutDelay: 300,
    });

    return () => typed.destroy();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
        const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
        
        setMousePosition({ x, y });
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      return () => heroElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, [mouseX, mouseY]);

  return (
    <section 
      ref={heroRef}
      className="hero-stunning"
      style={{
        background: `
          radial-gradient(circle at ${(mousePosition.x + 1) * 50}% ${(mousePosition.y + 1) * 50}%, 
          rgba(102, 126, 234, 0.4) 0%, 
          rgba(59, 130, 246, 0.3) 25%, 
          rgba(16, 185, 129, 0.2) 50%,
          rgba(15, 23, 42, 0.9) 100%),
          linear-gradient(135deg, 
          rgba(15, 23, 42, 0.95) 0%, 
          rgba(30, 41, 59, 0.9) 50%, 
          rgba(51, 65, 85, 0.85) 100%)
        `
      }}
    >
      {/* Floating Orbs */}
      <div className="floating-orbs">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="floating-orb"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.2, 0.8],
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${20 + Math.random() * 60}%`,
              background: `radial-gradient(circle, ${
                i % 3 === 0 ? 'rgba(102, 126, 234, 0.6)' :
                i % 3 === 1 ? 'rgba(59, 130, 246, 0.6)' :
                'rgba(16, 185, 129, 0.6)'
              } 0%, transparent 70%)`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div 
        className="hero-content-3d"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
      >
        {/* Name with 3D Effect */}
        <motion.div
          className="hero-name-3d"
          initial={{ opacity: 0, y: 100, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{
            transform: "translateZ(50px)",
          }}
        >
          <h1>
            <span className="name-letter">A</span>
            <span className="name-letter">a</span>
            <span className="name-letter">k</span>
            <span className="name-letter">a</span>
            <span className="name-letter">s</span>
            <span className="name-letter">h</span>
            <span className="name-spacer"> </span>
            <span className="name-letter">J</span>
            <span className="name-letter">a</span>
            <span className="name-letter">w</span>
            <span className="name-letter">l</span>
            <span className="name-letter">e</span>
          </h1>
        </motion.div>

        {/* Typed Text with Enhanced Styling */}
        <motion.div
          className="hero-title-3d"
          initial={{ opacity: 0, y: 50, rotateX: -45 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          style={{
            transform: "translateZ(30px)",
          }}
        >
          <h2>
            I'm a <span ref={textRef} className="typed-text"></span>
          </h2>
        </motion.div>

        {/* Description with Glass Effect */}
        <motion.p
          className="hero-description-3d"
          initial={{ opacity: 0, y: 30, rotateX: -30 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          style={{
            transform: "translateZ(20px)",
          }}
        >
          Crafting digital experiences with cutting-edge technology and innovative design. 
          Passionate about creating solutions that make a difference.
        </motion.p>

        {/* Enhanced CTA Buttons */}
        <motion.div
          className="hero-buttons-3d"
          initial={{ opacity: 0, y: 20, rotateX: -15 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, delay: 1.3, ease: "easeOut" }}
          style={{
            transform: "translateZ(40px)",
          }}
        >
          <motion.button
            className="cta-button primary"
            whileHover={{ 
              scale: 1.05, 
              rotateX: 5,
              boxShadow: "0 20px 40px rgba(102, 126, 234, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span>View My Work</span>
            <div className="button-glow"></div>
          </motion.button>

          <motion.button
            className="cta-button secondary"
            whileHover={{ 
              scale: 1.05, 
              rotateX: 5,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span>Get In Touch</span>
            <div className="button-glow"></div>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Interactive Particles */}
      <div className="hero-particles">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            initial={{ 
              opacity: 0,
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight
            }}
            animate={{
              opacity: [0, 1, 0],
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 8 + Math.random() * 12,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          className="scroll-mouse"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="scroll-wheel"></div>
        </motion.div>
        <p>Scroll to explore</p>
      </motion.div>
    </section>
  );
};

export default HeroStunning;
