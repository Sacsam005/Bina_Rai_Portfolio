import React from "react";
import "./Main.css";
import { Fade } from "react-awesome-reveal";

export default function Main() {
  const baguetteBox = require("baguettebox.js");
  window.addEventListener("load", function () {
    baguetteBox.run(".gallery");
  });
  return (
    <>
      <div className="small_text px-2 default_padding_top">
        <div className="card-section">
          <Fade duration={1000} triggerOnce>
            <h2 className="text-center heading2" id="about">
              About Me
            </h2>
            <p className="text-center p-3">
              Accomplished and energetic Quality Assurance team Leader with a
              solid history of achievement in Food Safey and Quality Assurance.
              Areas of expertise include creating training tool, developing new
              processes and procedures and coordinating with operations teams.{" "}
            </p>
          </Fade>

          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img
                  src={require("../img/what-bina-can-likes.JPG")}
                  className="card-img-top"
                  alt="What Bina Rai likes"
                />
                <div className="card-body text-center">
                  <h3 className="card-title heading2">What I like</h3>
                  <ul>
                    <li>Food & Travel</li>
                    <li>Bible & History</li>
                    <li>Camping w/husband</li>
                    <li>Cooking & Watching Netflix</li>
                  </ul>
                  <i
                    className="far fa-heart fa-2x"
                    style={{ color: "#6e40ff" }}
                  ></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  src={require("../img/what-bina-rai-is.JPG")}
                  className="card-img-top"
                  alt="What Bina Rai does"
                />
                <div className="card-body text-center">
                  <h3 className="card-title heading2">Who I am</h3>
                  <ul>
                    <li>Food Safety Regulatory Program Manager @STF</li>
                    <li>EX Regulatory Program Supervisor @HyLife</li>
                    <li>Major: Environmental Science</li>
                    <li>Masters | Minnesota State University</li>
                  </ul>
                  👩🏻‍💻
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  src={require("../img/what-bina-can-do.JPG")}
                  className="card-img-top"
                  alt="What Bina Rai can do"
                />
                <div className="card-body text-center">
                  <h3 className="card-title heading2">What I can do</h3>
                  <ul>
                    <li>Lead Improvement Team</li>
                    <li>Work as HACCP Coordinator</li>
                    <li>Manage Food Safety System</li>
                    <li>Review Trends</li>
                  </ul>
                  <i
                    className="fab fa-servicestack fa-2x"
                    style={{ color: "#6e40ff" }}
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="certifications-section small_text default_padding_top">
        <h2 className="text-center heading2">Certifications</h2>
        <p className="text-center">
          Skilled in Environmental regulations, assessment and laboratory
          techniques.
        </p>

        <article
          className="gallery"
          onClick={window.addEventListener("load", function () {
            baguetteBox.run(".gallery", {
              captions: true,
              buttons: "auto",
              animation: "fadeIn",
            });
          })}
        >
          <a
            href={require("../img/HACCP Principles for Meat and Poultry.jpg")}
            data-caption="This is to certify that Bina Rai has successfully completed the 18 hour, IHA accredited Certified HACCP Principles for Meat and Poultry."
            className="item"
            title="Certification for HACCP Principles for Meat and Poultry"
          >
            <img
              src={require("../img/HACCP Principles for Meat and Poultry.jpg")}
              alt="Bina Rai's HACCP Principles for Meat and Poultry Certification"
            />
          </a>
          <a
            href={require("../img/bina-rai-haccp-certificate.jpg")}
            data-caption="This is to certify that Bina Rai has successfully completed training to include: HACCP Plan Development and implementation Adopted by the National Advisory Committee on Microbiological Criteria for Foods (1997)."
            className="item"
            title="Certification for HACCP Plan Development and implementation"
          >
            <img
              src={require("../img/bina-rai-haccp-certificate.jpg")}
              alt="Bina Rai's HACCP Certification"
            />
          </a>
          <a
            href={require("../img/bina-rai-sqf-manufacturing-certificate.jpg")}
            data-caption="This is to certify that Bina Rai has successfully completed the examination for implementing SQF Systems - Manufacturing."
            className="item"
            title="Implementing SQF Systems - Manufacturing"
          >
            <img
              src={require("../img/bina-rai-sqf-manufacturing-certificate.jpg")}
              alt="Bina Rai's SQF-Manufacturing Certificate"
            />
          </a>
          <a
            href={require("../img/bina-rai-six-sigma-whitebelt-certificate.jpg")}
            data-caption="This is to certify that Bina Rai has satisfactorily completed and demonstrated proficiency in the curriculum set forth by the Council for Six Sigma Certification to be awarded the title of Certified White Belt."
            className="item"
            title="Six Sigma White Belt training"
          >
            <img
              src={require("../img/bina-rai-six-sigma-whitebelt-certificate.jpg")}
              alt="Bina Rai's Six Sigma White Belt Certificate"
            />
          </a>
          <a
            href={require("../img/bina-rai-six-sigma-greenbelt-certificate.jpg")}
            data-caption="This is to certify that Bina Rai has successfully completed Six Sigma Green Belt training."
            className="item"
            title="Six Sigma Green Belt training"
          >
            <img
              src={require("../img/bina-rai-six-sigma-greenbelt-certificate.jpg")}
              alt="Bina Rai's Six Sigma Green Belt Certificate"
            />
          </a>
        </article>

        <div className="gradient-card small_text text-light">
          <div className="gradient-card-wrapper">
            <div className="dots-box">
              <span className="dots"></span>
              <span className="dots"></span>
              <span className="dots"></span>
            </div>
            <div className="text-box">
              <h4 className="heading2">My publication</h4>
              <a
                href="https://link.springer.com/article/10.1007/s11356-019-07088-5"
                target="_blank"
                rel="noopener noreferrer"
              >
                Environmentally relevant exposures of male mice to carbendazim
                and thiram cause persistent genotoxicity in male mice{" "}
                <span>Click to read the article...</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="experience-section small_text default_padding_top">
        <Fade duration={1000} triggerOnce>
          <h2 className="text-center heading2" id="experience">
            Experience
          </h2>
          <p className="text-center p-3">
            Results-oriented Food Safety & Quality Assurance Professional with
            experience in researching, developing, and implementing food safety
            plans and policies. Environmental toxicology graduate with a
            demonstrated history of working in the higher education research
            field.
          </p>
        </Fade>
        <div className="experience-section-wrapper">
          <div className="experience-timeline-cards">
            <ul className="experience-item-list">
              <li className="item">
                <div className="item-timespan">Nov 2022-Present</div>
                <div className="item-title-text">FS Regulatory Manager</div>
                <div className="item-content-text">
                  <a
                    href="https://seaboardtriumphfoods.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Seaboard Triumph Foods (STF)
                  </a>
                </div>
              </li>
              <li className="item">
                <div className="item-timespan">Aug 2020-Nov 2022</div>
                <div className="item-title-text">
                  Regulatory Program Supervisor
                </div>
                <div className="item-content-text">
                  <a
                    href="https://hylife.com/windom/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    HyLife Foods Windom, LLC
                  </a>
                </div>
              </li>
              <li className="item">
                <div className="item-timespan">May 2020-Aug 2020</div>
                <div className="item-title-text">
                  Quality Assurance Lab Technician
                </div>
                <div className="item-content-text">
                  <a
                    href="https://comfreyfarmpork.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Comfrey Farm Prime Pork LLC
                  </a>
                </div>
              </li>
              <li className="item">
                <div className="item-timespan">Aug 2017-May2020</div>
                <div className="item-title-text">
                  Graduate Teaching Assistant
                </div>
                <div className="item-content-text">
                  <a
                    href="https://www.mnsu.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Minnesota State University
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div className="experience-grid-imgs">
            <img
              src={require("../img/bina-rai-1.JPG")}
              alt="Bina Rai's experiences"
            />
            <img
              src={require("../img/bina-rai-2.JPG")}
              alt="Bina Rai's experiences"
            />
            <img
              src={require("../img/bina-rai-3.JPG")}
              alt="Bina Rai's experiences"
            />
            <img
              src={require("../img/bina-rai-4.JPG")}
              alt="Bina Rai's experiences"
            />
            <img
              src={require("../img/bina-rai-5.JPG")}
              alt="Bina Rai's experiences"
            />
          </div>
        </div>
      </div>

      <Fade duration={1000} triggerOnce>
        <div className="default_padding_top">
          <Fade duration={1000} triggerOnce>
            <h2 className="text-center heading2">Affiliated Organizations</h2>
          </Fade>
          <Fade duration={1000} triggerOnce>
            <div className="logos-section">
              <a
                href="https://www.mnsu.edu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../img/minnesota-state-university.png")}
                  alt="Logo"
                  style={{ width: "22rem", height: "auto" }}
                />
              </a>

              <a
                href="https://hylife.com/windom/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../img/hylife.png")}
                  alt="Logo"
                  style={{ width: "8rem", height: "auto" }}
                />
              </a>
              <a
                href="https://comfreyfarmpork.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../img/comfrey-farm.png")}
                  alt="Logo"
                  style={{ width: "18rem" }}
                />
              </a>
              <a
                href="https://seaboardtriumphfoods.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../img/STF_logo.png")}
                  alt="Logo"
                  style={{ width: "22rem", height: "auto" }}
                />
              </a>
            </div>
          </Fade>
        </div>
      </Fade>
    </>
  );
}
