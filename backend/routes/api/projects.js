const express = require('express');
const router = express.Router();
const Project = require('../../models/Project');
const authMiddleware = require('../../middleware/auth');

// Get all projects
router.get('/', (req, res) => {
  Project.find()
    .then(projects => res.json(projects))
    .catch(err => res.status(500).json({ error: err.message }));
});

// Create a new project
router.post('/', authMiddleware, (req, res) => {
    const { name, date, description, files, images } = req.body;
    
    const newProject = new Project({
      name,
      date,
      description,
      createdBy: req.user.name,  // Use the user data from the JWT (authenticated user)
      files,
      images,
    });
  
    newProject.save()
      .then(project => res.status(201).json({ project }))
      .catch(err => res.status(500).json({ error: err.message }));
  });

module.exports = router;
