import React, { useState } from "react";
import logo from "../img/bina-rai-logo.png";
import "./Navbar.css";
import { Fade } from "react-awesome-reveal";

export default function Navbar() {
  const [click, setClick] = useState(true);

  const handleClick = () => {
    setClick(!click);
  };

  // Scroll to top
  const scrollFunction = () => {
    const scrollTopButton = document.getElementById("scroll-top-button");

    if (scrollTopButton) {
      document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
        ? (scrollTopButton.style.display = "block")
        : (scrollTopButton.style.display = "none");
    }
  };

  window.onscroll = () => scrollFunction();

  // scroll to the top of the document
  const scrollTopFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <>
      <button onClick={scrollTopFunction} id="scroll-top-button">
        <i className="fas fa-chevron-up"></i>
      </button>
      <Fade duration={1000} triggerOnce>
        <nav className="navbar navbar-expand-lg navbar-muted bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img
                className="logo"
                src={logo}
                alt="Logo"
                style={{
                  width: "122.8px",
                  height: "55.4px",
                }}
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={handleClick}
            >
              <div className={click ? "fas fa-bars" : "fas fa-times"}></div>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto medium_text">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About Me
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#experience">
                    Experience
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Fade>
    </>
  );
}
