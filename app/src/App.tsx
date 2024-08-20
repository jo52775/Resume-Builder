import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Dashboard from "./screens/Dashboard";
import Experience from "./screens/Experience";
import DetailsForm from "./screens/ResumeDetailsForm";
import ResumePreview from "./screens/ResumePreview";
import SplitViewManager from "./screens/SplitViewManager"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/resume-preview" element={<ResumePreview />} />
          <Route path="/resume-split-screen" element={<SplitViewManager />} />
          <Route path="/resume-details-form" element={<DetailsForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
