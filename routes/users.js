const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { auth } = require("../middleware/auth");
//const { check, validationResult } = require("express-validator");

const User = require("../models/User");

// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post("/", async (req, res) => {
    const { firstName, lastName, userName, email, password } = req.body;

    try {
        let user = await User.findOne({
            $or: [
                { email },
                { userName }
            ]
        });

        if (user) {
            return res.status(400).send("User already exists");
        }

        user = new User({
            firstName,
            lastName,
            userName,
            email,
            password
        });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();

        const payload = {
            user: {
                id: user.id,
            },
        };

        jwt.sign(
            payload,
            config.get("jwtSecret"),
            {
                expiresIn: 36000,
            },
            (err, token) => {
                if (err) throw err;
                res.json({ token, user });
            }
        );
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Server error");
    }
});

// @route   POST api/users/login
// @decs    Login user & get token
// @access  Public
router.post("/login", async (req, res) => {
    const { userName, password } = req.body;

    try {
        let user = await User.findOne({ userName });

        if (!user) {
            return res.status(400).send("Invalid Credentials");
        }
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ msg: "Invalid Credentials" });
        }

        const payload = {
            user: {
                id: user.id,
            },
        };

        jwt.sign(
            payload,
            config.get("jwtSecret"),
            {
                expiresIn: 360000,
            },
            (err, token) => {
                if (err) throw err;
                res.json({ token, user });
            }
        );
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Server error");
    }
})

// @route   GET api/users
// @decs    Get logged in user
// @access  Private
router.get("/", auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        res.json(user);
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Server error");
    }
})

// @route   PUT api/users/:id
// @desc    Update a user
// @access  Private
router.put("/:id", auth, async (req, res) => {
    try {
        let user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({ msg: "User not found" })
        };

        await User.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            {
                new: true,
                runValidators: true,
            }
        );
        user = await User.findById(req.params.id);
        res.send(user);
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Server error");
    }
})

module.exports = router;