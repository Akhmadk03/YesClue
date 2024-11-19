const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  name: String,
  date: Date,
  description: String,
  createdBy: String,  // The user who created the project
  files: [{ name: String, url: String }],
  images: [{ name: String, url: String }],
  comments: [String],  // User comments
});

module.exports = mongoose.model('Project', ProjectSchema);
