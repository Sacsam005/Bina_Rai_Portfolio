import React, { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin"; // Import the TextPlugin
import "./Hero.css";

export default function Hero() {
  useEffect(() => {
    // Register the TextPlugin
    gsap.registerPlugin(TextPlugin);

    // Animate the text of an element with class .green
    gsap.to("h1", {
      duration: 5,
      text: "Bina Rai | Food Safety Regulatory Program Manager ",
    });
  }, []);

  return (
    <>
      {/* Fixed social icons */}
      <div id="fixed-social-icons">
        <div>
          <RouterLink
            to="mailto:binarai532@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="far fa-envelope fa-2x"></i> <span>Email me</span>
          </RouterLink>
        </div>
        <div>
          <RouterLink
            to="https://www.linkedin.com/in/bina-r-502745162/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin fa-2x"></i> <span>LinkedIn</span>
          </RouterLink>
        </div>
      </div>

      {/* End of Fixed social icons */}

      {/* Hero section */}
      <div className="hero-section" id="home">
        <div className="hero-section-wrapper overflow-hidden">
          <div className="hero-wrapper-right">
            <img
              width="378px"
              src={require("../../img/bina-rai.jpg")}
              alt="Bina Rai with Emma"
            />
          </div>

          <div className="hero-wrapper-left heading">
            {/* eslint-disable-next-line */}
            <h1 style={{ fontSize: "5vw", fontWeight: 900 }}></h1>
          </div>
        </div>
      </div>
      {/* End of Hero section */}
    </>
  );
}
