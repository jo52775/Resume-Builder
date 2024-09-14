const express = require("express");
require("dotenv").config();
const { generateContent } = require("./gemini");

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

// Login
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

// AI Generation
app.post("/generate-summary", async (req, res) => {
  const summary = req.body.summary;
  const prompt = `Based on this resume summary provided: ${summary}, re-create it into a 3-4 sentence version that concisely summarizes the user's key points while providing justification as to why the user is suitable for the role.`;
  try {
    const text = await generateContent(prompt);
    res.json({ content: text });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/generate-experience", async (req, res) => {
  const {
    companyName,
    positionTitle,
    keyResponsibilities,
    startDate,
    endDate,
    city,
  } = req.body;
  const prompt = `Generate 5-7 concise, well-written bullet points for a resume experience section for a role at ${companyName} as ${positionTitle}. These bullet points should be formatted in HTML list items (<li>) and should highlight a mix of typical responsibilities, achievements, and skills relevant to the position, and some points should focus on the provided key responsibilities, which are described as follows: ${keyResponsibilities}. Do not add any html tags and instead ONLY use newline breaks (\n) to seperate/denote a bullet point, provide the response in a format that can be directly put into the resume.`;
  try {
    const text = await generateContent(prompt);
    res.json({ content: text });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Save resume
app.post("/save-resume", async (req, res) => {
  try {
    const resumeData = req.body;
    console.log("Received resume data:", resumeData);
    await saveResumeToDatabase(resumeData);
    res.send({ message: "Resume saved successfully" });
  } catch (error) {
    console.error("Error saving resume data:", error);
    res.status(500).send("Failed to save resume data");
  }
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
