const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const router = express.Router();

router.route("/students").get((req, res) => {

    User.find().then((Students) => {

        res.json(Students)
    }).catch((err) => {
        console.log(err)
    })
});

router.route("/register").post(async (req, res) => {
  const name = req.body.full_name;
  const email = req.body.email;
  const password = req.body.password;
  const role = req.body.role;
  try {
    const hashedPassword = await bcrypt.hash(password, 12);
    const newStudent = new User({
      full_name: name,
      email: email,
      password: hashedPassword,
      role: role
    });
    console.log(newStudent);

    await newStudent.save(); // Wait for the student to be saved

    const token = jwt.sign(
      {userID: newStudent.id, email: newStudent.email,role: newStudent.role },
      'supersecret_dont_share',
      { expiresIn: '1h' }
    );

    res.status(201).json({userID: newStudent.id, email: newStudent.email, role: newStudent.role, token: token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
});


router.post("/login", async (req, res) => {
    console.log("Request Body:", req.body);
    const { email, password } = req.body;
  
    try {
      let user;
  
      // Check if the username matches the email format
      if (/^\S+@\S+\.\S+$/.test(email)) {
        user = await User.findOne({ email: email });
      } else {
        return res.status(404).json({ message: "Not an email format" });
      }
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
  
      const token = jwt.sign(
        { userID: user.id,email: user.email,role:user.role },
        'supersecret_dont_share',
        { expiresIn: '1h' }
      );
  
      res.status(201).json({ userID: user.id,email: user.email,role:user.role ,token: token });

    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  })

router.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Failed to logout" });
    }
    res.clearCookie("connect.sid");
    return res.status(200).json({ message: "Logout successful" });
  });
});


module.exports = router;
