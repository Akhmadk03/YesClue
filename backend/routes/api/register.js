const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../../models/User'); // Import the User model
const router = express.Router();

// Register route
router.post('/register', async (req, res) => {
    const { username, password, email } = req.body;

    try {
        // Check if the email is already registered
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email is already registered' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user document
        const newUser = new User({
            username,
            password: hashedPassword,
            email
        });

        // Save the user to MongoDB
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully!', userId: newUser._id });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
});

module.exports = router;
