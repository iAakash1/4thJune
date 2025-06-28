const express = require('express');
const router = express.Router();

// Sample projects data (in a real app, this would come from a database)
const projects = [
  {
    id: 1,
    title: "Cotton Crop Disease Prediction",
    description: "A desktop app to detect cotton crop diseases with 93% accuracy, supporting multiple languages and providing treatment recommendations.",
    image: "/uploads/cotton.jpeg",
    technologies: ["Python", "TensorFlow", "Tkinter"],
    githubUrl: "https://github.com/aakashjawle/cotton-disease",
    liveUrl: null,
    featured: true,
    category: "AI/ML"
  },
  {
    id: 2,
    title: "Fuel Consumption Prediction",
    description: "A regression-based tool to predict vehicle fuel efficiency with intuitive data visualization.",
    image: "/uploads/fuel.jpeg",
    technologies: ["Python", "scikit-learn", "Matplotlib"],
    githubUrl: "https://github.com/aakashjawle/fuel-prediction",
    liveUrl: null,
    featured: true,
    category: "Data Science"
  },
  {
    id: 3,
    title: "Student Task Manager",
    description: "A web app for students to manage tasks with prioritization and responsive design, deployed on Vercel.",
    image: "/uploads/taskmanager.webp",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/aakashjawle/task-manager",
    liveUrl: "https://student-task-manager.vercel.app",
    featured: true,
    category: "Web Development"
  },
  {
    id: 4,
    title: "Personal Finance Tracker",
    description: "A stack-based web app for tracking expenses with interactive UI and real-time updates.",
    image: "/uploads/finance.webp",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/aakashjawle/finance-tracker",
    liveUrl: "https://finance-tracker.vercel.app",
    featured: true,
    category: "Web Development"
  }
];

// Get all projects
router.get('/', (req, res) => {
  const { category, featured } = req.query;
  let filteredProjects = projects;

  if (category) {
    filteredProjects = filteredProjects.filter(project => 
      project.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (featured === 'true') {
    filteredProjects = filteredProjects.filter(project => project.featured);
  }

  res.json(filteredProjects);
});

// Get single project
router.get('/:id', (req, res) => {
  const project = projects.find(p => p.id === parseInt(req.params.id));
  if (!project) {
    return res.status(404).json({ error: 'Project not found' });
  }
  res.json(project);
});

// Get project categories
router.get('/meta/categories', (req, res) => {
  const categories = [...new Set(projects.map(p => p.category))];
  res.json(categories);
});

module.exports = router;
