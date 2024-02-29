import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Loader from "./components/Loader/Loader";

function App() {
  const [loading, setLoading] = useState(true);

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
