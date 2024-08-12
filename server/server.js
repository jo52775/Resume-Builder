const express = require("express");
require("dotenv").config();

const mongoose = require("mongoose");
const User = require("./models/user");

const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Connect to database when running the server
const uri = process.env.DATABASE_URI;

async function DBconnect() {
  try {
    await mongoose.connect(uri);
    console.log("Successfully connected to MongoDB!");
  } catch (error) {
    console.log(error);
  }
}

DBconnect();

// Register User
app.post("/register", async (req, res) => {
  const email = req.body.email;
  const fullName = req.body.fullName;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;

  // Query for checking if provided email already exists
  const result = await User.find({ email: email });

  if (password != confirmPassword) {
    res.send({ message: "password does not match" });
  } else if (result.length > 0) {
    res.send({ message: "email already exists" });
  } else {
    const user = new User({
      email: email,
      password: password,
      full_name: fullName,
    });

    try {
      await user.save();
      res.send({ message: "User created" });
    } catch (error) {
      res.send({ message: "Error creating user" });
    }
  }
});

app.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // Query for checking if a user exists with provided email and password
  const result = await User.find({ email: username, password: password });

  if (result.length > 0) {
    res.send({ message: "login successful" });
  } else {
    res.send({ message: "login failed" });
  }
});

app.post("/generate", async (req, res) => {
  const userInput = req.body.prompt;

  if (!userInput) {
    return res.status(400).send("Prompt is required");
  }

  try {
    const response = await axios.post(
      "https://api.gemini.com/generate_content", // Confirm this endpoint
      { prompt: userInput },
      {
        headers: {
          Authorization: `Bearer ${process.env.GEMINI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Gemini API response:", response.data);
    res.json(response.data);
  } catch (error) {
    console.error("Error generating suggestions:", error.message);
    if (error.response) {
      console.error("Response data:", error.response.data);
      console.error("Response status:", error.response.status);
      console.error("Response headers:", error.response.headers);
    }
    res.status(500).send("Failed to generate suggestions");
  }
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
