import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Loader from "./components/Loader/Loader";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return !loading ? (
    <ParallaxProvider>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </ParallaxProvider>
  ) : (
    <Loader />
  );
}

export default App;
