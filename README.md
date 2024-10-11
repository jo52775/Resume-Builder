# Resume Builder Application

## Overview
An AI-driven tool that simplifies the process of creating, editing, and downloading professional resumes with tailored suggestions based on job titles and user-provided information. This project is built using the MERN stack (MongoDB, Express.js, React, and Node.js) with TypeScript. It also uses the Gemini API for AI-generated content and JSON Web Tokens (JWT) for user authentication.

## Features
### User Authentication & Profile Management
- 
### Dashboard
- The dashboard stores resumes, allowing users to easily download them as a **PDFs** or delete them as needed.
  
### Real-Time Editing
- Users can input information into a form, and the resume preview updates instantly to reflect their changes. The integrated **text editor tool** allows for further customizations, ensuring each resume is personalized.


### AI Integration
- The integration of the Gemini API enhances the resume-building experience by generating tailored content based on what users provide. Users enter their job title, description, and relevant details, which the application then sends to the API. In response, the API generates tailored summaries, skills, and descriptions that further strengthen the resume.

## How to Run
1. Download all dependencies:
```
  npm install
```

2. Run the backend

```
  cd server
```
```
  npm run dev
```
3. Run the frontend

```
  cd app
```
```
  npm run dev
```
