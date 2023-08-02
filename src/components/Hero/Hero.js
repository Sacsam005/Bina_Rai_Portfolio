import React, { useState, useEffect, useRef } from "react";
import "./Hero.css";
import classNames from "classnames";

export default function Hero() {
  // Floating connect box JS
  const [popupOpen, popupClose] = useState(true);
  const popupRef = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    const href = e.currentTarget.href
      .toString()
      .replace(/AT/, "@")
      .replace(/DOT/, ".");
    window.location.href = href; // Redirect to the modified email address
  };

  useEffect(() => {
    const onPageLoad = () => {
      popupClose(true);
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }

    const handleClickOutside = (e) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(e.target) &&
        !e.target.classList.contains("close-btn-onload")
      ) {
        popupClose(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line
  }, [popupRef]);

  return (
    <>
      {/* Onload pop up */}
      <div
        className={classNames("floating-panel-container-onload", {
          visible: popupOpen,
        })}
        ref={popupRef}
      >
        <p>Thanks to this introductory card from STF! Let's connect</p>
        <button
          className="close-btn-onload"
          onClick={() => popupClose(!popupOpen)}
        >
          <i className="fas fa-times"></i>
        </button>
        <div className="floating-panel-button-container">
          <a
            href="https://www.linkedin.com/in/bina-r-502745162/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="all-button">Get in touch</button>
          </a>
          <form className="form-inline">
            <div className="input-group">
              <input
                type="text"
                id="email"
                className="form-control"
                placeholder="Send me an Email"
              />
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <a href="mailto:binarai532@gmail.com#" onClick={handleClick}>
                    <i className="fa fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
        <ul>
          <li>
            <a
              href="https://www.instagram.com/bina.raii/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram" style={{ color: "#B13390" }}></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/bina-r-502745162/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin" style={{ color: "#0274B3" }}></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100016910795790"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f" style={{ color: "#1877F2" }}></i>
            </a>
          </li>
        </ul>
        <img
          src={require("../img/stf_introduction.jpg")}
          alt="Welcome to STF - Bina Rai"
        />
      </div>

      {/* End of Onload pop up */}

      {/* Fixed social icons */}
      <div id="fixed-social-icons">
        <div>
          <a
            href="https://www.facebook.com/profile.php?id=100016910795790"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f fa-2x"></i> <span>Facebook</span>
          </a>
        </div>
        <div>
          <a
            href="mailto:binarai532@gmail.com#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="far fa-envelope fa-2x"></i> <span>Email me</span>
          </a>
        </div>
        <div>
          <a
            href="https://www.instagram.com/bina.raii/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram fa-2x"></i> <span>Instagram</span>
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/bina-r-502745162/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin fa-2x"></i> <span>LinkedIn</span>
          </a>
        </div>
      </div>

      {/* End of Fixed social icons */}

      {/* Hero section */}
      <div className="hero-section" id="home">
        <div className="hero-section-wrapper">
          <div className="hero-wrapper-right">
            <img
              width="378px"
              src={require("../img/bina-rai.jpg")}
              alt="Bina Rai with Emma"
            />
          </div>
          <div className="hero-wrapper-left">
            <h1>Bina Rai | Food Safety Regulatory Program Manager</h1>
          </div>
        </div>
      </div>
      {/* End of Hero section */}
    </>
  );
}
