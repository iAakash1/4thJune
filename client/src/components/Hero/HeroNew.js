import React, { useEffect, useRef, useState } from 'react';
import { Box, Container, Typography, Button, IconButton, Grid, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Typed from 'typed.js';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import './Hero.css';

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const typedRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: [
          'Full Stack Developer 🚀',
          'AI & ML Enthusiast 🤖', 
          'Problem Solver 💡',
          'Tech Innovator ⚡',
          'Creative Coder 🎨',
        ],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        showCursor: true,
        cursorChar: '|',
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  // Advanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [-5, 5, -5],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const socialItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const socialLinks = [
    { icon: <LinkedInIcon />, href: 'https://linkedin.com/in/aakash-jawle', label: 'LinkedIn' },
    { icon: <GitHubIcon />, href: 'https://github.com/aakashjawle', label: 'GitHub' },
    { icon: <CodeIcon />, href: 'https://leetcode.com/aakashjawle', label: 'LeetCode' },
  ];

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      id="home"
      ref={ref}
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated gradient overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `
            radial-gradient(circle at ${50 + mousePosition.x * 10}% ${50 + mousePosition.y * 10}%, 
            rgba(102, 126, 234, 0.3) 0%, 
            rgba(118, 75, 162, 0.2) 50%, 
            transparent 100%)
          `,
          pointerEvents: 'none',
          transition: 'background 0.3s ease',
        }}
      />

      {/* Floating particles */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + i % 3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            style={{
              position: 'absolute',
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
              background: `hsl(${220 + Math.random() * 40}, 70%, 60%)`,
              borderRadius: '50%',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              boxShadow: `0 0 20px hsl(${220 + Math.random() * 40}, 70%, 60%)`,
            }}
          />
        ))}
      </Box>

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={6} alignItems="center">
          {/* Left Content */}
          <Grid item xs={12} lg={8}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {/* Greeting with particle effect */}
              <motion.div variants={itemVariants}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <AutoAwesomeIcon sx={{ color: '#f59e0b', fontSize: 30, mr: 2 }} />
                  </motion.div>
                  <Typography
                    variant="h5"
                    sx={{
                      color: '#fbbf24',
                      fontWeight: 500,
                      textShadow: '0 0 20px rgba(251, 191, 36, 0.5)',
                    }}
                  >
                    Hello, I'm
                  </Typography>
                </Box>
              </motion.div>

              {/* Name with special effects */}
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '3rem', md: '5rem', lg: '6rem' },
                    fontWeight: 800,
                    mb: 2,
                    background: 'linear-gradient(45deg, #667eea, #764ba2, #f093fb)',
                    backgroundSize: '200% 200%',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    animation: 'gradientShift 3s ease infinite',
                    textShadow: '0 0 50px rgba(102, 126, 234, 0.5)',
                    '@keyframes gradientShift': {
                      '0%': { backgroundPosition: '0% 50%' },
                      '50%': { backgroundPosition: '100% 50%' },
                      '100%': { backgroundPosition: '0% 50%' },
                    },
                  }}
                >
                  Aakash Jawle
                </Typography>
              </motion.div>

              {/* Typed text with glow effect */}
              <motion.div variants={itemVariants}>
                <Box sx={{ minHeight: '80px', mb: 4 }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xs: '1.5rem', md: '2.5rem' },
                      fontWeight: 600,
                      color: '#e2e8f0',
                      textShadow: '0 0 30px rgba(226, 232, 240, 0.3)',
                    }}
                  >
                    <span ref={typedRef}></span>
                  </Typography>
                </Box>
              </motion.div>

              {/* Description with typing effect */}
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#94a3b8',
                    mb: 4,
                    fontSize: { xs: '1rem', md: '1.25rem' },
                    lineHeight: 1.6,
                    maxWidth: '600px',
                    textShadow: '0 0 20px rgba(148, 163, 184, 0.3)',
                  }}
                >
                  Crafting digital experiences with cutting-edge technology and creative innovation. 
                  Let's build something extraordinary together! ✨
                </Typography>
              </motion.div>

              {/* CTA Buttons with hover effects */}
              <motion.div variants={itemVariants}>
                <Box sx={{ display: 'flex', gap: 3, mb: 4, flexWrap: 'wrap' }}>
                  <motion.div
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 20px 50px rgba(102, 126, 234, 0.4)',
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      startIcon={<RocketLaunchIcon />}
                      href="#projects"
                      sx={{
                        background: 'linear-gradient(45deg, #667eea, #764ba2)',
                        color: 'white',
                        fontWeight: 600,
                        py: 2,
                        px: 4,
                        borderRadius: 3,
                        fontSize: '1.1rem',
                        textTransform: 'none',
                        boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #5a67d8, #553c9a)',
                        },
                      }}
                    >
                      View My Work
                    </Button>
                  </motion.div>

                  <motion.div
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 20px 50px rgba(255, 255, 255, 0.2)',
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outlined"
                      size="large"
                      href="#contact"
                      sx={{
                        borderColor: '#667eea',
                        color: '#667eea',
                        fontWeight: 600,
                        py: 2,
                        px: 4,
                        borderRadius: 3,
                        fontSize: '1.1rem',
                        textTransform: 'none',
                        borderWidth: 2,
                        backdrop: 'blur(10px)',
                        background: 'rgba(255, 255, 255, 0.05)',
                        '&:hover': {
                          borderColor: '#5a67d8',
                          background: 'rgba(102, 126, 234, 0.1)',
                          color: '#5a67d8',
                        },
                      }}
                    >
                      Get In Touch
                    </Button>
                  </motion.div>
                </Box>
              </motion.div>

              {/* Social Links with animations */}
              <motion.div variants={itemVariants}>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={index}
                      variants={socialItemVariants}
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 5,
                        boxShadow: '0 10px 25px rgba(102, 126, 234, 0.3)',
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <IconButton
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: '#e2e8f0',
                          background: 'rgba(255, 255, 255, 0.1)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(102, 126, 234, 0.3)',
                          width: 60,
                          height: 60,
                          '&:hover': {
                            background: 'linear-gradient(45deg, #667eea, #764ba2)',
                            color: 'white',
                          },
                        }}
                      >
                        {social.icon}
                      </IconButton>
                    </motion.div>
                  ))}
                </Box>
              </motion.div>
            </motion.div>
          </Grid>

          {/* Right Visual */}
          <Grid item xs={12} lg={4}>
            <motion.div
              variants={floatingVariants}
              animate="animate"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: { xs: 250, md: 350 },
                  height: { xs: 250, md: 350 },
                }}
              >
                {/* Rotating rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{
                    position: 'absolute',
                    top: -20,
                    left: -20,
                    right: -20,
                    bottom: -20,
                    border: '2px solid rgba(102, 126, 234, 0.3)',
                    borderRadius: '50%',
                    borderTopColor: '#667eea',
                  }}
                />
                
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  style={{
                    position: 'absolute',
                    top: -40,
                    left: -40,
                    right: -40,
                    bottom: -40,
                    border: '1px solid rgba(118, 75, 162, 0.2)',
                    borderRadius: '50%',
                    borderBottomColor: '#764ba2',
                  }}
                />

                {/* Profile image with glow */}
                <Avatar
                  src="/pic.jpeg"
                  sx={{
                    width: '100%',
                    height: '100%',
                    border: '4px solid rgba(102, 126, 234, 0.5)',
                    boxShadow: `
                      0 0 50px rgba(102, 126, 234, 0.4),
                      inset 0 0 50px rgba(102, 126, 234, 0.1)
                    `,
                    background: 'linear-gradient(45deg, #667eea, #764ba2)',
                  }}
                />

                {/* Floating particles around profile */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [-10, 10, -10],
                      x: [-5, 5, -5],
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                    style={{
                      position: 'absolute',
                      width: 8,
                      height: 8,
                      background: '#667eea',
                      borderRadius: '50%',
                      boxShadow: '0 0 20px #667eea',
                      top: `${20 + (i * 60) % 80}%`,
                      left: `${10 + (i * 30) % 80}%`,
                    }}
                  />
                ))}
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* Scroll indicator */}
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          style={{
            position: 'absolute',
            bottom: 30,
            left: '50%',
            transform: 'translateX(-50%)',
            cursor: 'pointer',
          }}
          onClick={scrollToNext}
        >
          <IconButton
            sx={{
              color: '#667eea',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              '&:hover': {
                background: 'rgba(102, 126, 234, 0.2)',
              },
            }}
          >
            <KeyboardArrowDownIcon fontSize="large" />
          </IconButton>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;
