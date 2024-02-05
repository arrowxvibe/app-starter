const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).json({ message: 'Unauthorized' });

    jwt.verify(token, 'your-secret-key', (err, decoded) => {
        if (err) return res.status(401).json({ message: 'Unauthorized' });
        req.user = decoded;
        next();
    });
};

router.get('/', auth, (req, res) => {
    res.json({ message: 'Welcome to the protected route!' });
});

module.exports = router;
