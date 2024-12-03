const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose
  .connect('your_mongo_connection_string_here', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ Error connecting to MongoDB:', err));

// Routes
app.use('/api/auth', require('./routes/api/Auth')); // Ensure correct casing here

// Start server
const PORT = process.env.PORT || 5003;
app.listen(PORT, () => console.log(`Server is running on http://0.0.0.0:${PORT}`));
