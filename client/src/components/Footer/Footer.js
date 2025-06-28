import React from 'react';
import { Box, Container, Typography, Grid, IconButton, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <LinkedInIcon />,
      href: 'https://linkedin.com/in/aakash-jawle',
      label: 'LinkedIn',
    },
    {
      icon: <GitHubIcon />,
      href: 'https://github.com/aakashjawle',
      label: 'GitHub',
    },
    {
      icon: <CodeIcon />,
      href: 'https://leetcode.com/aakashjawle',
      label: 'LeetCode',
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4} alignItems="center">
          {/* Brand & Description */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  mb: 2,
                  background: 'linear-gradient(135deg, #667eea, #764ba2)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Aakash Jawle
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  opacity: 0.8,
                  lineHeight: 1.6,
                  mb: 3,
                }}
              >
                Full Stack Developer & AI Enthusiast passionate about creating
                innovative solutions and solving real-world problems through technology.
              </Typography>
              
              {/* Social Links */}
              <Box sx={{ display: 'flex', gap: 2 }}>
                {socialLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconButton
                      component="a"
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      sx={{
                        color: 'white',
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          background: 'rgba(255, 255, 255, 0.2)',
                          boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)',
                        },
                      }}
                    >
                      {link.icon}
                    </IconButton>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  color: 'white',
                }}
              >
                Quick Links
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {quickLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Typography
                      component="button"
                      onClick={() => scrollToSection(link.href)}
                      sx={{
                        background: 'none',
                        border: 'none',
                        color: 'rgba(255, 255, 255, 0.7)',
                        cursor: 'pointer',
                        fontSize: '1rem',
                        textAlign: 'left',
                        padding: '8px 0',
                        transition: 'color 0.3s ease',
                        fontFamily: 'inherit',
                        '&:hover': {
                          color: 'white',
                        },
                      }}
                    >
                      {link.name}
                    </Typography>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  color: 'white',
                }}
              >
                Get In Touch
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography
                  variant="body2"
                  sx={{
                    opacity: 0.8,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  📧 aakashjawle1010@gmail.com
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    opacity: 0.8,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  📱 +91 8767384453
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    opacity: 0.8,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  📍 Nigdi, Pune, Maharashtra, India
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 2,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                opacity: 0.7,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              © {currentYear} Aakash Jawle. Made with{' '}
              <FavoriteIcon sx={{ fontSize: 16, color: '#f87171' }} /> in India
            </Typography>
            
            <Typography
              variant="body2"
              sx={{
                opacity: 0.7,
              }}
            >
              Built with React, Node.js & ❤️
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Footer;
