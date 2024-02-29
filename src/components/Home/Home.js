import React from "react";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Certifications from "../Certifications/Certifications";
import Experience from "../Experience/Experience";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <>
      <main className="m-2 p-2 bg-light">
        <Hero />
        <About />
        <Certifications />
        <Experience />
        <Footer />
      </main>
    </>
  );
}
