import React from 'react';
import { Box, Container, Typography, Grid, Paper, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import PsychologyIcon from '@mui/icons-material/Psychology';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const stats = [
    { number: 4, label: 'Projects Completed', suffix: '+' },
    { number: 10, label: 'Technologies Mastered', suffix: '+' },
    { number: 300, label: 'LeetCode Problems Solved', suffix: '+' },
  ];

  const highlights = [
    {
      icon: <SchoolIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'B.Tech in Computer Engineering',
      description: 'PCCOE, Pune',
    },
    {
      icon: <CodeIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Full-Stack Developer',
      description: 'MERN Stack Specialist',
    },
    {
      icon: <PsychologyIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'AI & ML Enthusiast',
      description: 'TensorFlow & Python Expert',
    },
  ];

  return (
    <Box
      id="about"
      ref={ref}
      component="section"
      sx={{
        py: 10,
        background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
      }}
      data-aos="fade-up"
    >
      <Container maxWidth="xl">
        {/* Section Header */}
        <Box textAlign="center" mb={8}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="overline"
              sx={{
                color: 'primary.main',
                fontWeight: 600,
                fontSize: '1rem',
                letterSpacing: 2,
              }}
            >
              01
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 2,
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              About Me
            </Typography>
            <Box
              sx={{
                width: 100,
                height: 4,
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                margin: '0 auto',
                borderRadius: 2,
              }}
            />
          </motion.div>
        </Box>

        <Grid container spacing={6} alignItems="center">
          {/* Text Content */}
          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 500,
                  mb: 3,
                  color: 'text.primary',
                  lineHeight: 1.6,
                }}
              >
                I'm a Computer Engineering student at PCCOE, Pune, with a passion for technology
                and innovation. My journey in tech began with curiosity and has grown into
                a commitment to building impactful solutions.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  color: 'text.secondary',
                  lineHeight: 1.8,
                  fontSize: '1.125rem',
                }}
              >
                I specialize in web development, AI, and machine learning, with hands-on experience
                in projects like crop disease prediction and fuel efficiency tools. I thrive on
                solving complex problems and continuously learning new technologies.
              </Typography>

              {/* Highlights */}
              <Box sx={{ mb: 4 }}>
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  >
                    <Paper
                      elevation={2}
                      sx={{
                        p: 3,
                        mb: 2,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 3,
                        background: 'rgba(255, 255, 255, 0.8)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(102, 126, 234, 0.1)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateX(10px)',
                          boxShadow: 4,
                        },
                      }}
                    >
                      {highlight.icon}
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                          {highlight.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {highlight.description}
                        </Typography>
                      </Box>
                    </Paper>
                  </motion.div>
                ))}
              </Box>

              {/* Skills Tags */}
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {['React', 'Node.js', 'Python', 'TensorFlow', 'MongoDB', 'AWS', 'Docker', 'Git'].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  >
                    <Chip
                      label={skill}
                      sx={{
                        background: 'linear-gradient(135deg, #667eea, #764ba2)',
                        color: 'white',
                        fontWeight: 500,
                        '&:hover': {
                          transform: 'scale(1.1)',
                        },
                      }}
                    />
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Stats */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {stats.map((stat, index) => (
                  <Paper
                    key={index}
                    elevation={3}
                    sx={{
                      p: 4,
                      textAlign: 'center',
                      background: 'linear-gradient(135deg, #667eea, #764ba2)',
                      color: 'white',
                      borderRadius: 3,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: 6,
                      },
                    }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 800,
                        mb: 1,
                        textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
                      }}
                    >
                      {inView && (
                        <CountUp
                          end={stat.number}
                          duration={2}
                          delay={0.5 + index * 0.2}
                          suffix={stat.suffix}
                        />
                      )}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 500,
                        opacity: 0.9,
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Paper>
                ))}
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
