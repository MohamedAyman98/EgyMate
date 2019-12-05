const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

// User model
const User = require("../../models/User");

// Get all Users
router.get("/", async (req, res) => {
  const users = await User.find();
  res.json({ data: users });
});

// Get User by ID
router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) res.json({ error: "User does not exist" });
  else res.json({ data: user });
});

// Register user
router.post("/register", (req, res) => {
  const { name, email, password, phoneNumber, type } = req.body;

  //Simple validation
  if (!name || !email || !password || !phoneNumber || !type)
    return res.status(400).json({ msg: "Please enter all fields" });

  //Check for existing user
  User.findOne({ email }).then(user => {
    if (user) return res.status(400).json({ msg: "User already exists" });

    const newUser = new User({
      name,
      email,
      password,
      phoneNumber,
      type
    });

    // Create salt & hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then(user => {
          jwt.sign(
            { id: user.id },
            config.get("jwtSecret"),
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                user: {
                  id: user.id,
                  name: user.name,
                  email: user.email,
                  type: user.type
                }
              });
            }
          );
        });
      });
    });
  });
});

// User login
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  //Simple validation
  if (!email || !password)
    return res.status(400).json({ msg: "Please enter all fields" });

  //Check for existing user
  User.findOne({ email }).then(user => {
    if (!user) return res.status(400).json({ msg: "User does not exist" });

    // Validate password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });
      jwt.sign(
        { id: user.id },
        config.get("jwtSecret"),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({
            token,
            user: {
              id: user.id,
              name: user.name,
              email: user.email,
              type: user.type
            }
          });
        }
      );
    });
  });
});

// Create a user
router.post("/", async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.json({
      msg: "User was created successfully",
      data: newUser
    });
  } catch (error) {
    console.log(error);
  }
});

// Update a user
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findOne({ id });
    if (!user) return res.status(404).send({ error: "User does not exist" });
    const updatedUser = await User.updateOne(req.body);
    res.json({
      msg: "User updated successfully",
      data: updatedUser
    });
  } catch (error) {
    console.log(error);
  }
});

// Delete a user
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedUser = await User.findByIdAndRemove(id);
    if (!deletedUser) res.status(404).json({ error: "User does not exist" });

    res.json({
      msg: "User was deleted successfully",
      data: deletedUser
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
