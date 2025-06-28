import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Chip,
  IconButton,
  Tabs,
  Tab,
  Dialog,
  DialogContent,
  DialogTitle,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  // Loading state completely removed for ESLint compliance

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    fetchProjects();
    fetchCategories();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('/api/projects');
      setProjects(response.data);
      setFilteredProjects(response.data);
      // setLoading(false); // Removed as loading state is not used
    } catch (error) {
      console.error('Error fetching projects:', error);
      // Fallback to static data
      const staticProjects = [
        {
          id: 1,
          title: "Cotton Crop Disease Prediction",
          description: "A desktop app to detect cotton crop diseases with 93% accuracy, supporting multiple languages and providing treatment recommendations.",
          image: "/cotton.jpeg",
          technologies: ["Python", "TensorFlow", "Tkinter"],
          githubUrl: "https://github.com/aakashjawle/cotton-disease",
          liveUrl: null,
          category: "AI/ML"
        },
        {
          id: 2,
          title: "Fuel Consumption Prediction",
          description: "A regression-based tool to predict vehicle fuel efficiency with intuitive data visualization.",
          image: "/fuel.jpeg",
          technologies: ["Python", "scikit-learn", "Matplotlib"],
          githubUrl: "https://github.com/aakashjawle/fuel-prediction",
          liveUrl: null,
          category: "Data Science"
        },
        {
          id: 3,
          title: "Student Task Manager",
          description: "A web app for students to manage tasks with prioritization and responsive design, deployed on Vercel.",
          image: "/taskmanager.webp",
          technologies: ["HTML", "CSS", "JavaScript"],
          githubUrl: "https://github.com/aakashjawle/task-manager",
          liveUrl: "https://student-task-manager.vercel.app",
          category: "Web Development"
        },
        {
          id: 4,
          title: "Personal Finance Tracker",
          description: "A stack-based web app for tracking expenses with interactive UI and real-time updates.",
          image: "/finance.webp",
          technologies: ["HTML", "CSS", "JavaScript"],
          githubUrl: "https://github.com/aakashjawle/finance-tracker",
          liveUrl: "https://finance-tracker.vercel.app",
          category: "Web Development"
        }
      ];
      setProjects(staticProjects);
      setFilteredProjects(staticProjects);
      // setLoading(false); // Removed as loading state is not used
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get('/api/projects/meta/categories');
      setCategories(['All', ...response.data]);
    } catch (error) {
      setCategories(['All', 'Web Development', 'AI/ML', 'Data Science']);
    }
  };

  const handleCategoryChange = (event, newValue) => {
    setActiveCategory(newValue);
    if (newValue === 0) {
      setFilteredProjects(projects);
    } else {
      const category = categories[newValue];
      setFilteredProjects(projects.filter(project => project.category === category));
    }
  };

  const openProjectDialog = (project) => {
    setSelectedProject(project);
  };

  const closeProjectDialog = () => {
    setSelectedProject(null);
  };

  return (
    <Box
      id="projects"
      ref={ref}
      component="section"
      sx={{
        py: 10,
        background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
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
              02
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
              Featured Projects
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

        {/* Category Filter */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
          <Tabs
            value={activeCategory}
            onChange={handleCategoryChange}
            variant={isMobile ? "scrollable" : "standard"}
            scrollButtons="auto"
            sx={{
              '& .MuiTab-root': {
                fontWeight: 600,
                textTransform: 'none',
                fontSize: '1rem',
              },
              '& .Mui-selected': {
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              },
            }}
          >
            {categories.map((category, index) => (
              <Tab key={index} label={category} />
            ))}
          </Tabs>
        </Box>

        {/* Projects Grid */}
        <Grid container spacing={4}>
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <Grid item xs={12} sm={6} lg={4} key={project.id}>
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 3,
                      overflow: 'hidden',
                      background: 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(102, 126, 234, 0.1)',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      '&:hover': {
                        boxShadow: '0 20px 40px rgba(102, 126, 234, 0.2)',
                        '& .project-image': {
                          transform: 'scale(1.05)',
                        },
                        '& .project-overlay': {
                          opacity: 1,
                        },
                      },
                    }}
                    onClick={() => openProjectDialog(project)}
                  >
                    <Box sx={{ position: 'relative', overflow: 'hidden', height: 200 }}>
                      <CardMedia
                        component="img"
                        height="200"
                        image={project.image}
                        alt={project.title}
                        className="project-image"
                        sx={{
                          transition: 'transform 0.3s ease',
                        }}
                      />
                      <Box
                        className="project-overlay"
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'rgba(102, 126, 234, 0.9)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          opacity: 0,
                          transition: 'opacity 0.3s ease',
                          gap: 2,
                        }}
                      >
                        {project.githubUrl && (
                          <IconButton
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            sx={{
                              color: 'white',
                              background: 'rgba(255, 255, 255, 0.2)',
                              '&:hover': { background: 'rgba(255, 255, 255, 0.3)' },
                            }}
                          >
                            <GitHubIcon />
                          </IconButton>
                        )}
                        {project.liveUrl && (
                          <IconButton
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            sx={{
                              color: 'white',
                              background: 'rgba(255, 255, 255, 0.2)',
                              '&:hover': { background: 'rgba(255, 255, 255, 0.3)' },
                            }}
                          >
                            <LaunchIcon />
                          </IconButton>
                        )}
                      </Box>
                    </Box>

                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                        {project.technologies.map((tech, techIndex) => (
                          <Chip
                            key={techIndex}
                            label={tech}
                            size="small"
                            sx={{
                              background: 'linear-gradient(135deg, #667eea, #764ba2)',
                              color: 'white',
                              fontWeight: 500,
                              fontSize: '0.75rem',
                            }}
                          />
                        ))}
                      </Box>

                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          mb: 1,
                          color: 'text.primary',
                        }}
                      >
                        {project.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          lineHeight: 1.6,
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {project.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </AnimatePresence>
        </Grid>
      </Container>

      {/* Project Detail Dialog */}
      <Dialog
        open={!!selectedProject}
        onClose={closeProjectDialog}
        maxWidth="md"
        fullWidth
        fullScreen={isMobile}
      >
        {selectedProject && (
          <>
            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              {selectedProject.title}
              <IconButton onClick={closeProjectDialog}>
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              <Box sx={{ mb: 3 }}>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  style={{
                    width: '100%',
                    height: '300px',
                    objectFit: 'cover',
                    borderRadius: '12px',
                  }}
                />
              </Box>
              
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                {selectedProject.technologies.map((tech, index) => (
                  <Chip
                    key={index}
                    label={tech}
                    sx={{
                      background: 'linear-gradient(135deg, #667eea, #764ba2)',
                      color: 'white',
                      fontWeight: 500,
                    }}
                  />
                ))}
              </Box>

              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
                {selectedProject.description}
              </Typography>

              <Box sx={{ display: 'flex', gap: 2 }}>
                {selectedProject.githubUrl && (
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <IconButton
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        background: 'linear-gradient(135deg, #667eea, #764ba2)',
                        color: 'white',
                        '&:hover': { background: 'linear-gradient(135deg, #4c51bf, #553c9a)' },
                      }}
                    >
                      <GitHubIcon />
                    </IconButton>
                  </motion.div>
                )}
                {selectedProject.liveUrl && (
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <IconButton
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        background: 'linear-gradient(135deg, #667eea, #764ba2)',
                        color: 'white',
                        '&:hover': { background: 'linear-gradient(135deg, #4c51bf, #553c9a)' },
                      }}
                    >
                      <LaunchIcon />
                    </IconButton>
                  </motion.div>
                )}
              </Box>
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default Projects;
