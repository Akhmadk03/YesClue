require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db'); // MongoDB connection setup

const app = express();
const PORT = process.env.PORT || 5003;

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(bodyParser.json()); // Parse JSON requests
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded requests

// Test route
app.get('/', (req, res) => {
  res.send('Server is running...');
});

// API Routes
app.use('/api/auth', require('./routes/api/auth')); // Auth routes for sign-up/sign-in
app.use('/api/projects', require('./routes/api/projects')); // Project routes

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  db.connect(); // Initialize the MongoDB connection
});
