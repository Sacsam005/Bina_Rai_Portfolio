import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Loader from "./components/Loader/Loader";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
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
