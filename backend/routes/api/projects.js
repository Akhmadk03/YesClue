const express = require('express');
const router = express.Router();
const Project = require('../../models/Project');

// Get all projects
router.get('/', (req, res) => {
  Project.find()
    .then(projects => res.json(projects))
    .catch(err => res.status(500).json({ error: err.message }));
});

// Create a new project
router.post('/', (req, res) => {
  const { name, date, description, createdBy, files, images } = req.body;

  const newProject = new Project({
    name,
    date,
    description,
    createdBy,
    files,
    images,
  });

  newProject.save()
    .then(project => res.status(201).json({ project }))
    .catch(err => res.status(500).json({ error: err.message }));
});

module.exports = router;
