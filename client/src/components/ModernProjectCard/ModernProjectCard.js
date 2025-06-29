import React from 'react';
import { Box, Card, CardContent, Typography, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';

const ModernProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100 
      }}
      whileHover={{ y: -10, scale: 1.02 }}
      style={{ height: '100%' }}
    >
      <Card 
        className="modern-card glow-effect"
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'hidden',
          cursor: 'pointer',
          '&:hover .project-image': {
            transform: 'scale(1.1)',
          },
          '&:hover .tech-chips': {
            transform: 'translateY(-5px)',
          }
        }}
      >
        {/* Project Image with Overlay */}
        <Box
          sx={{
            position: 'relative',
            height: 200,
            overflow: 'hidden',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          }}
        >
          {project.image && (
            <Box
              component="img"
              className="project-image"
              src={project.image}
              alt={project.title}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.5s ease',
              }}
            />
          )}
          
          {/* Gradient Overlay */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 100%)',
            }}
          />
          
          {/* Action Buttons Overlay */}
          <Box
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              display: 'flex',
              gap: 1,
              opacity: 0,
              transition: 'opacity 0.3s ease',
              '.modern-card:hover &': {
                opacity: 1,
              }
            }}
          >
            {project.liveUrl && (
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  className="glass-button-primary"
                  size="small"
                  startIcon={<LaunchIcon />}
                  component="a"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ minWidth: 'auto', p: 1 }}
                >
                  Live
                </Button>
              </motion.div>
            )}
            
            {project.githubUrl && (
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  className="glass-button"
                  size="small"
                  startIcon={<GitHubIcon />}
                  component="a"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ minWidth: 'auto', p: 1 }}
                >
                  Code
                </Button>
              </motion.div>
            )}
          </Box>
        </Box>

        <CardContent sx={{ flexGrow: 1, p: 3 }}>
          {/* Project Title */}
          <Typography
            variant="h5"
            component="h3"
            className="shimmer-text"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: 'white',
            }}
          >
            {project.title}
          </Typography>

          {/* Project Description */}
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255, 255, 255, 0.8)',
              mb: 3,
              lineHeight: 1.6,
            }}
          >
            {project.description}
          </Typography>

          {/* Technology Chips */}
          <Box 
            className="tech-chips"
            sx={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: 1,
              transition: 'transform 0.3s ease',
            }}
          >
            {project.technologies?.map((tech, techIndex) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: (index * 0.1) + (techIndex * 0.05) }}
                whileHover={{ scale: 1.1 }}
              >
                <Chip
                  label={tech}
                  size="small"
                  className="glass-button"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                  }}
                />
              </motion.div>
            ))}
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ModernProjectCard;
