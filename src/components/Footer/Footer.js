import React from "react";
import "./Footer.css";
import { Fade } from "react-awesome-reveal";

export default function Footer() {
  return (
    <>
      <hr />
      <Fade down duration={1000} triggerOnce>
        <footer>
        <div className="footer-section small_text">
          <div className="footer-content">
            <div className="quote">
              <strong>
                <span>#WordOfTheGod:</span> O woman, great is your faith! Let it
                be done for you as you wish.
                <span> - Matthew 15:28</span>
              </strong>
            </div>
          </div>
          <div className="footer-content">
            <div className="footer-sub-content">
              <h6 className="medium_text">SiteMap</h6>
              <ul>
                <li className="footer-links">
                  <a href="#home">Home</a>
                </li>
                <li className="footer-links">
                  <a href="#about">About Me</a>
                </li>
                <li className="footer-links">
                  <a href="#experience">Experience</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright_text">
          <h6 className="text-center mb-0">© 2023 | Bina Rai</h6>
        </div>
        </footer>
      </Fade>
    </>
  );
}
