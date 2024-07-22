import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // This is just testing to see if API call works
  useEffect(() => {
    fetch("http://localhost:5000/test")
      .then((response) => response.json())
      .then((data) => console.log(data));
  });

  return (
    <>
      <h1>hello world.</h1>
    </>
  );
}

export default App;
