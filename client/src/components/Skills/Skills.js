import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavaScriptIcon from '@mui/icons-material/Javascript';
import CodeIcon from '@mui/icons-material/Code';
import PythonIcon from '@mui/icons-material/Code';
import GitIcon from '@mui/icons-material/GitHub';
import CloudIcon from '@mui/icons-material/Cloud';
import BarChartIcon from '@mui/icons-material/BarChart';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import StorageIcon from '@mui/icons-material/Storage';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML5', icon: <HtmlIcon sx={{ fontSize: 40 }} />, level: 90 },
        { name: 'CSS3', icon: <CssIcon sx={{ fontSize: 40 }} />, level: 85 },
        { name: 'JavaScript', icon: <JavaScriptIcon sx={{ fontSize: 40 }} />, level: 88 },
        { name: 'React', icon: <CodeIcon sx={{ fontSize: 40 }} />, level: 85 },
      ],
    },
    {
      title: 'Backend & AI',
      skills: [
        { name: 'Python', icon: <PythonIcon sx={{ fontSize: 40 }} />, level: 92 },
        { name: 'Node.js', icon: <CodeIcon sx={{ fontSize: 40 }} />, level: 80 },
        { name: 'TensorFlow', icon: <SmartToyIcon sx={{ fontSize: 40 }} />, level: 85 },
        { name: 'Firebase', icon: <StorageIcon sx={{ fontSize: 40 }} />, level: 78 },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: <GitIcon sx={{ fontSize: 40 }} />, level: 88 },
        { name: 'AWS', icon: <CloudIcon sx={{ fontSize: 40 }} />, level: 75 },
        { name: 'Data Structures', icon: <CodeIcon sx={{ fontSize: 40 }} />, level: 90 },
        { name: 'Matplotlib', icon: <BarChartIcon sx={{ fontSize: 40 }} />, level: 82 },
      ],
    },
  ];

  return (
    <Box
      id="skills"
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
              03
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
              Skills & Technologies
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

        {/* Skills Grid */}
        <Grid container spacing={4}>
          {skillCategories.map((category, categoryIndex) => (
            <Grid item xs={12} md={4} key={categoryIndex}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    height: '100%',
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(102, 126, 234, 0.1)',
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 20px 40px rgba(102, 126, 234, 0.2)',
                    },
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      mb: 3,
                      textAlign: 'center',
                      background: 'linear-gradient(135deg, #667eea, #764ba2)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {category.title}
                  </Typography>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{
                          duration: 0.6,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Box
                            sx={{
                              color: 'primary.main',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              minWidth: 50,
                            }}
                          >
                            {skill.icon}
                          </Box>
                          <Box sx={{ flexGrow: 1 }}>
                            <Box
                              sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                mb: 1,
                              }}
                            >
                              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                {skill.name}
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{ fontWeight: 500, color: 'primary.main' }}
                              >
                                {skill.level}%
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                width: '100%',
                                height: 8,
                                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                                borderRadius: 4,
                                overflow: 'hidden',
                              }}
                            >
                              <motion.div
                                initial={{ width: 0 }}
                                animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                                transition={{
                                  duration: 1,
                                  delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                                  ease: "easeOut",
                                }}
                                style={{
                                  height: '100%',
                                  background: 'linear-gradient(135deg, #667eea, #764ba2)',
                                  borderRadius: 4,
                                }}
                              />
                            </Box>
                          </Box>
                        </Box>
                      </motion.div>
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Additional Technologies */}
        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
              Other Technologies I Work With
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: 2,
              }}
            >
              {[
                'MongoDB',
                'Express.js',
                'Docker',
                'Kubernetes',
                'Redux',
                'TypeScript',
                'Material-UI',
                'Tailwind CSS',
                'Jest',
                'Socket.io',
                'GraphQL',
                'PostgreSQL',
              ].map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Paper
                    elevation={2}
                    sx={{
                      px: 3,
                      py: 1.5,
                      background: 'linear-gradient(135deg, #667eea, #764ba2)',
                      color: 'white',
                      fontWeight: 500,
                      borderRadius: 25,
                      cursor: 'default',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)',
                      },
                    }}
                  >
                    {tech}
                  </Paper>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Skills;
