// projectApi.js

const express = require('express');
const router = express.Router();
const Project = require('../models/project'); // Adjust the path accordingly

// Get list of projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects.map(project => {
        return {
          id: project._id,
          title: project.title,
          companyName: project.companyName,
          state: project.state,
          shortDesc: project.shortDesc,
          totalTasks: project.totalTasks,
          totalComments: project.totalComments,
          teamMembers: project.teamMembers,
          taskCompleted: project.taskCompleted,
          progress: project.progress,
        };
      }));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get list of projects
router.get('/:id', async (req, res) => {
    try {
      const project = await Project.findById(req.params.id);
      res.json({
            id: project._id,
            title: project.title,
            companyName: project.companyName,
            state: project.state,
            shortDesc: project.shortDesc,
            totalTasks: project.totalTasks,
            totalComments: project.totalComments,
            teamMembers: project.teamMembers,
            taskCompleted: project.taskCompleted,
            progress: project.progress,
          });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

// Create a project
router.post('/', async (req, res) => {
  const project = new Project(req.body);
  try {
    const newProject = await project.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a project
router.patch('/:id', async (req, res) => {
  try {
    const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a project
router.delete('/:id', async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
