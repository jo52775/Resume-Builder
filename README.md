# [Resume Builder Application](https://resumai-app.onrender.com/)

## Overview
**Revamp your job seach with ResumAI!** This AI-driven tool simplifies the process of creating, editing, and downloading professional resumes with tailored suggestions based on job titles and user-provided information. 

Built on the **MERN stack (MongoDB, Express.js, React, and Node.js)** with TypeScript. The project also uses the Gemini API for AI-generated content and JSON Web Tokens (JWT) for secure user authentication.

![image](https://github.com/user-attachments/assets/ef02fb34-5b74-4689-a81d-5f6539cd5678)


## Features
### User Authentication & Profile Management
- Upon login/registration, a **JWT** is generated and used in all subsequent API requests that require verification to access user resources. **HTTP-only Cookies** are used to securely transmit the tokens between the user and the server. 
- Users can view their profile information and change their passwords if desired.

### Dashboard
- The dashboard stores resumes, allowing users to easily download them as a **PDFs** or delete them as needed.
  
### Real-Time Editing
- The split-screen feature allows users to input information into forms on one side of the screen, while seeing instant updates reflecting their changes in the resume preview on the other side. The integrated **text editor tool** allows for further customizations that ensures a personalized resume.

### AI Integration
- The integration of the **Gemini API** enhances the resume-building experience by generating tailored content based on what users provide. Users enter their job title, description, and relevant details, which the application then sends to the API. In response, the API generates tailored summaries, skills, and descriptions that further strengthen the resume.

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
