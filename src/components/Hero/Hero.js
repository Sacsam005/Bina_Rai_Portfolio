import React from "react";
import { Link as RouterLink } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
  return (
    <>
      {/* Fixed social icons */}
      <div id="fixed_social_icons_container">
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
      <div className="hero_section mx-auto my-2 border border-dark position-relative">
        <img
          className="px-2"
          width="46px"
          height="46.9px"
          src={require("../../img/logo.png")}
          alt="Bina Rai"
        />

        <div className="d-flex flex-column">
          <h1 className="text-right">BINA RAI</h1>
          <div className="p-2 w-100 bg-dark text-light">
            Food Safety Regulatory Program Manager
          </div>
        </div>
      </div>

      <p className="small_text mb-0 p-1 text-center">
        Accomplished and energetic Quality Assurance team Leader with a solid
        history of achievement in Food Safety and Quality Assurance. Areas of
        expertise include creating training tool, developing new processes and
        procedures and coordinating with operations teams.
      </p>
      {/* End of Hero section */}
    </>
  );
}
