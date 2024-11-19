const jwt = require('jsonwebtoken');

// Middleware to verify JWT tokens
module.exports = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach the user payload to the request
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid token.' });
  }
};
