import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./screens/Login";

function App() {
  useEffect(() => {
    fetch("http://localhost:5000/test")
      .then((response) => response.json())
      .then((data) => console.log(data));
  });

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
