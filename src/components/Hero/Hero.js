import React from "react";
import { Link as RouterLink } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
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
        <div className="hero-section-wrapper">
          <div className="hero-wrapper-right">
            <img
              width="378px"
              src={require("../../img/bina-rai.jpg")}
              alt="Bina Rai with Emma"
            />
          </div>
          <div className="hero-wrapper-left">
            <h1>
              <span style={{ textDecoration: "underline" }}>Bina Rai</span> |
              Food Safety Regulatory Program Manager
            </h1>
          </div>
        </div>
      </div>
      {/* End of Hero section */}
    </>
  );
}
