// project.js

const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: String,
  companyName: String,
  state: String,
  shortDesc: String,
  totalTasks: Number,
  totalComments: Number,
  teamMembers: [{
    name: String,
  }],
  progress: Number,
  taskCompleted: Number,
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
