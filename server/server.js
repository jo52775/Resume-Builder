const express = require("express");
require("dotenv").config();
const { generateContent } = require("./gemini");

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const verifyToken = require("./authentication/auth-middleware");
const User = require("./models/user");
const Resume = require("./models/resume");

const cors = require("cors");
const resume = require("./models/resume");
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

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
  const emailExists = await User.findOne({ email: email });

  if (password != confirmPassword) {
    res.send({ message: "password does not match" });
  } else if (emailExists) {
    res.send({ message: "email already exists" });
  } else {
    try {
      const hashedPassword = await bcrypt.hash(password, 10);

      const user = new User({
        email: email,
        password: hashedPassword,
        full_name: fullName,
      });

      await user.save();

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: "1h",
      });

      res.cookie("tokenCookie", token, {
        httpOnly: true,
      });

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

  try {
    // Query for checking if a user exists with provided email
    const emailExists = await User.findOne({ email: username });

    if (!emailExists) {
      return res.send({ message: "login failed: email does not exist." });
    }
    const passwordCompare = await bcrypt.compare(
      password,
      emailExists.password
    );

    if (passwordCompare) {
      const token = jwt.sign(
        { id: emailExists._id },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "1h" }
      );

      res.cookie("tokenCookie", token, {
        httpOnly: true,
      });
      res.json({ message: "login successful" });
    } else {
      res.send({ message: "login failed: password does not match." });
    }
  } catch (error) {
    res.send({ message: "login failed" });
  }
});

// User logout
app.post("/logout", async (req, res) => {
  res.clearCookie("tokenCookie");
  res.send({ message: "logout successful" });
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
  const prompt = `Generate 5-7 concise, well-written bullet points for a resume experience section for a role at ${companyName} as ${positionTitle}. These bullet points should be written in plain text, separated by newline breaks (\n), with no bullet symbols, no parentheses, and no punctuation at the end of the points. Focus on typical responsibilities, achievements, and skills relevant to the position, and include some key responsibilities as described here: ${keyResponsibilities}. Provide the response in a format that can be directly put into the resume.`;
  try {
    const text = await generateContent(prompt);
    res.json({ content: text });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/generate-project", async (req, res) => {
  const { projectType, name, description, startDate, endDate } = req.body;
  const prompt = `Generate 2-3 concise, well-written bullet points for a resume project section for a ${projectType} titled "${name}". These bullet points should be written in plain text, separated by newline breaks (\n), with no bullet symbols, no parentheses, and no punctuation at the end of the points. Focus on the project's objectives, key contributions, skills utilized, and outcomes achieved. Use the following description for context: "${description}". Provide the response in a format that can be directly put into the resume.`;
  try {
    const text = await generateContent(prompt);
    res.json({ content: text });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/generate-skills", async (req, res) => {
  const { jobTitle, jobDescription } = req.body;
  const skillsPrompt = `Based on the job title "${jobTitle}" and job description "${jobDescription}", generate exactly 5 to 10 critical skills for success in this role. Provide the response in plain text, with each skill on a new line, separated by newline breaks (\n). Do not include any bullet symbols, parentheses, punctuation, or special characters at the end of the skills. Ensure the response includes no more than 10 skills.`;

  try {
    const skillsText = await generateContent(skillsPrompt);
    const skillsArray = skillsText
      .split("\n")
      .map((skill) => skill.trim())
      .filter((skill) => skill);
    res.json({ skills: skillsArray });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Save resume
app.post("/save-resume", verifyToken, async (req, res) => {
  const resumeData = req.body;

  // User ID from middleware
  const user_id = req.user_id;

  const user = await User.findOne({ _id: user_id });

  console.log("User: ", user);
  console.log("Received resume data:", resumeData);

  const resume = new Resume({
    contactFormData: resumeData.contactFormData,

    summaryFormData: resumeData.summaryFormData,

    educationFormData: resumeData.educationFormData,

    experienceFormData: resumeData.experienceFormData,

    projectsFormData: resumeData.projectsFormData,

    skillsFormData: resumeData.skillsFormData,

    documentTitle: resumeData.documentTitle,

    user: user,
  });

  try {
    const saved_resume = await resume.save();
    user.resumes.push(saved_resume._id);
    await user.save();
    res.send({ message: "Resume created" });
  } catch (error) {
    res.send({ message: "Error creating resume" });
  }
});

// Get resumes
app.get("/get-resumes", verifyToken, async (req, res) => {
  const user_id = req.user_id;
  try {
    // Acquiring resume IDs from user
    const user = await User.findOne({ _id: user_id });
    const user_resume_IDs = user.resumes;

    // Storing each user resume's data into an array
    let i = 0;
    const user_resumes = [];
    while (i < user_resume_IDs.length) {
      const resume_item = await Resume.findOne({ _id: user_resume_IDs[i] });
      user_resumes.push(resume_item);
      i++;
    }

    res.json({ message: user_resumes });
  } catch (error) {
    console.log(error);
    res.send({ message: "Could not retrieve resume data" });
  }
});

// Get user profile
app.get("/user-profile", verifyToken, async (req, res) => {
  const user_id = req.user_id;
  try {
    const user = await User.findOne({ _id: user_id });
    res.json({
      message: "success",
      email: user.email,
      fullName: user.full_name,
    });
  } catch (error) {
    console.log(error);
    res.send({ message: "Failed to retrieve user data." });
  }
});

// Protected route for verifying user token
app.get("/verify", verifyToken, async (req, res) => {
  res.status(200).send({ message: "access granted" });
});

// Delete a resume
app.delete("/delete-resume", verifyToken, async(req,res) => {
  const user_id = req.user_id;
  const resume_id = req.body._id;
  try {
    const user = await User.findOne({_id: user_id});
    await Resume.findOne({_id: resume_id});
    
    // Deleting resume from database
    await Resume.deleteOne({_id: resume_id});

    // Removing user reference to deleted resume
    user.resumes.pull(resume_id);
    await user.save();

    res.status(200).send({message: "Resume has been deleted."});

  } catch (error) {
    console.log(error);
    res.send({message: "Failed to delete the resume."});
  }
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
