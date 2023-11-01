import React, { useContext } from "react";
import { SlideUpContext } from "../../App";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Experience.css";

export default function Main() {
  const { slideUpVariants } = useContext(SlideUpContext);

  const [experienceTitleRef, experienceTitleInView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const [experienceTextRef, experienceTextInView] = useInView({
    triggerOnce: true,
    threshold: 0.06,
  });

  return (
    <>
      <div
        className="experience-section small_text default_padding_top"
        id="experience"
      >
        <motion.h2
          className="text-center heading"
          style={{ fontSize: "2rem" }}
          ref={experienceTitleRef}
          initial="offscreen"
          animate={experienceTitleInView ? "onscreen" : "offscreen"}
          variants={slideUpVariants}
        >
          Experience
        </motion.h2>
        <motion.p
          className="text-center p-3"
          ref={experienceTextRef}
          initial="offscreen"
          animate={experienceTextInView ? "onscreen" : "offscreen"}
          variants={slideUpVariants}
        >
          Results-oriented Food Safety & Quality Assurance Professional with
          experience in researching, developing, and implementing food safety
          plans and policies. Environmental toxicology graduate with a
          demonstrated history of working in the higher education research
          field.
        </motion.p>
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
              src={require("../../img/bina-rai-1.JPG")}
              alt="Bina Rai's experiences"
            />
            <img
              src={require("../../img/bina-rai-2.JPG")}
              alt="Bina Rai's experiences"
            />
            <img
              src={require("../../img/bina-rai-3.JPG")}
              alt="Bina Rai's experiences"
            />
            <img
              src={require("../../img/bina-rai-4.JPG")}
              alt="Bina Rai's experiences"
            />
            <img
              src={require("../../img/bina-rai-5.JPG")}
              alt="Bina Rai's experiences"
            />
          </div>
        </div>
      </div>

      <div className="organizations_section default_padding_top">
        <h2 className="text-center heading">Affiliated Organizations</h2>
        <div className="logos-section">
          <a
            href="https://www.mnsu.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../../img/minnesota-state-university.png")}
              alt="Logo"
              style={{ width: "15rem", height: "auto" }}
            />
          </a>

          <a
            href="https://hylife.com/windom/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../../img/hylife.png")}
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
              src={require("../../img/comfrey-farm.png")}
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
              src={require("../../img/STF_logo.png")}
              alt="Logo"
              style={{ width: "15rem", height: "auto" }}
            />
          </a>
        </div>
      </div>
    </>
  );
}
