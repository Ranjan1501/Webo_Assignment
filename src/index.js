const express = require("express");
const cors = require("cors");
// import mongoose from "mongoose"
const User = require("./Models/users.models");

// const userController = require("./Controllers/users.controllers");
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

//Routes
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: "Login Successful", user: user });
      } else {
        res.send({ message: "Password didn't match" });
      }
    } else {
      res.send({ message: "User not registered" });
    }
  });
});

app.post("/register", (req, res) => {
  const { name, email, password, phone, gender, date, reEnterPassword } =
    req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "User already registered" });
    } else {
      const user = new User({
        name,
        email,
        phone,
        gender,
        date,
        password,
        reEnterPassword,
      });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Successfully Registered, Please login now." });
        }
      });
    }
  });
});
//  single user by id
app.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id, (err, user) => {
      res.send({ user });
    });
  } catch (err) {}
});
// status update
app.patch("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (err, user) => {
        res.status(201).json({ user });
      }
    );
  } catch (err) {
    res.status(500).json({ message: err.message, status: "Failed" });
  }
});
// delete user
app.delete("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send(user);
  } catch (e) {
    res.status(500).json({ message: e.message, status: "Failed" });
  }
});

// edit
app.put("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.body).lean().exec();
    return res.status(200).send(user);
  } catch (e) {
    res.status(500).json({ message: e.message, status: "Failed" });
  }
});

module.exports = app;
