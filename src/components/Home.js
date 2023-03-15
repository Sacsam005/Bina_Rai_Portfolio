import React from "react";
import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Main />
      <Footer />
    </>
  );
}
