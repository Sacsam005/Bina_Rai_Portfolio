import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Loader from "./components/Loader/Loader";

// Global contexts export
export const SlideUpContext = React.createContext();

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const slideUpVariants = {
    offscreen: {
      opacity: 0,
      y: 50,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        damping: 50,
        mass: 1,
        stiffness: 200,
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  const SlideUpContextValues = {
    slideUpVariants,
  };

  return !loading ? (
    <SlideUpContext.Provider value={SlideUpContextValues}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </SlideUpContext.Provider>
  ) : (
    <Loader />
  );
}

export default App;
