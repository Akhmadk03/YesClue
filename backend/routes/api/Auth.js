const express = require('express');
const router = express.Router();
const User = require('../../models/User'); // Import the User model
const auth = require('../../middleware/auth'); // Import auth middleware

// Sign-up route
router.post('/signup', async (req, res) => {
  try {
    const { name, email, password, institution, fieldOfStudy } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Missing required fields.' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists.' });
    }

    const newUser = new User({ name, email, password, institution, fieldOfStudy });
    await newUser.save();
    res.status(201).json({ message: 'Account created successfully!' });
  } catch (err) {
    res.status(500).json({ message: 'An error occurred while creating the account.' });
  }
});

// Sign-in route
router.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }

    res.status(200).json({ message: 'Sign in successful!', user });
  } catch (err) {
    res.status(500).json({ message: 'An error occurred during sign-in.' });
  }
});

// Endpoint to get the current logged-in user's details
router.get('/current-user', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password'); // Exclude password
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
