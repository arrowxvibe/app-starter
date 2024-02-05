const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(401).json({ message: 'Username or password is incorrect' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        console.log("ds")
        if (!isMatch) {
            return res.status(401).json({ message: 'Username or password is incorrect' });
        }

        const token = jwt.sign({ _id: user._id, role: user.role }, 'your-secret-key', { expiresIn: '1h' });

        // Return user details and token in response, similar to the fake backend
        const responseUser = {
            id: user._id,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            role: user.role,
            token: token,
        };

        res.json(responseUser);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.post('/register', async (req, res) => {
    const { email, password, fullname } = req.body;

    try {
        const nameWords = fullname.split(" ");
        const firstName = nameWords[0];
        const lastName = nameWords.length > 1 ? nameWords.slice(1).join(" ") : null;

        const newUser = new User({
            username: email,
            password,
            firstName,
            lastName,
            role: "Sales",
        });

        await newUser.save();

        // Return the newly registered user details and a success message
        const responseUser = {
            id: newUser._id,
            username: newUser.username,
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            role: newUser.role,
            token: 'your-fake-token', // You can generate a real token here if needed
        };

        res.status(200).json(responseUser);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.post('/forget-password', async (req, res) => {
    const { username } = req.body;

    try {
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(401).json({ message: 'Sorry, we could not find any registered user with the entered username' });
        }

        // TODO Implement your password reset logic here
        // For simplicity, let's just send a success message
        const responseJson = {
            message: "We've sent you a link to reset the password to your registered email.",
        };

        res.status(200).json(responseJson);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
