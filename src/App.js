import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import Loader from "./components/Loader/Loader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return !loading ? <Home /> : <Loader />;
}

export default App;
