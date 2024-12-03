const express = require('express');
const router = express.Router();

// Example User model
const User = require('../../models/User');

// POST: Sign Up
router.post('/signup', async (req, res) => {
  try {
    const { name, email, password, institution, fieldOfStudy } = req.body;
    const user = new User({ name, email, password, institution, fieldOfStudy });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error registering user', error: err.message });
  }
});

// POST: Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    res.status(200).json({ message: 'Login successful', user });
  } catch (err) {
    res.status(500).json({ message: 'Error logging in', error: err.message });
  }
});

module.exports = router;
