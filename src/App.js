import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Loader from "./components/Loader/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const body = document.body;
      const scrollPosition = window.scrollY;

      if (scrollPosition < 400) {
        body.style.backgroundColor = "#9CF5FF";
      } else if (scrollPosition >= 400 && scrollPosition < 1200) {
        body.style.backgroundColor = "#9bf6ff";
      } else if (scrollPosition >= 1200 && scrollPosition < 3000) {
        body.style.backgroundColor = "#ffd6a5";
      } else if (scrollPosition >= 3000) {
        body.style.backgroundColor = "#FFADAD";
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // The empty dependency array ensures the effect runs only once on mount

  useEffect(() => {
    setLoading(false);
  }, []);

  return !loading ? (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  ) : (
    <Loader />
  );
}

export default App;
