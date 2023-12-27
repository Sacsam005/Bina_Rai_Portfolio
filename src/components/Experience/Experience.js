import React, { useEffect, useRef } from "react";
import { Link as RouterLink } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap-trial/all";
import "./Experience.css";

export default function Main() {
  const experienceRef = useRef(null);
  const organizationsRef = useRef(null);

  const experienceImages = [
    require("../../img/bina-rai-1.JPG"),
    require("../../img/bina-rai-2.JPG"),
    require("../../img/bina-rai-3.JPG"),
    require("../../img/bina-rai-4.JPG"),
    require("../../img/bina-rai-5.JPG"),
  ];

  function animateBounceOut(elements) {
    elements.forEach((element) => {
      gsap.set(element, { scale: 0, opacity: 0.9, filter: "blur(10px)" });

      gsap.to(element, {
        duration: 1.5,
        scale: 1,
        opacity: 1,
        filter: "none",
        autoAlpha: 1,
        ease: "bounce.out",
        stagger: {
          grid: "auto",
          from: "random",
          each: 0.5,
        },
        scrollTrigger: {
          trigger: element,
          start: "top bottom-=100",
          end: "bottom top+=100",
          once: true,
        },
      });
    });
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const experienceImages = experienceRef.current.querySelectorAll(
      ".experience__imgs_grid img"
    );
    const organizationImages =
      organizationsRef.current.querySelectorAll(".logos_section img");

    animateBounceOut(experienceImages);
    animateBounceOut(organizationImages);
  }, []);

  return (
    <>
      <hr />
      <div className="experience__section_wrapper small_text" id="experience">
        <h2 className="text-center font-monospace fw-bold heading">
          Experience
        </h2>

        <p className="text-center p-2">
          Results-oriented Food Safety & Quality Assurance Professional with
          experience in researching, developing, and implementing food safety
          plans and policies. Environmental toxicology graduate with a
          demonstrated history of working in the higher education research
          field.
        </p>

        <div className="experience_section">
          <div className="experience__timeline_cards">
            <ul className="experience__items_list">
              <li className="item neo_brutalism_shadow">
                <div className="item_timespan">Nov 2022-Present</div>
                <div className="item_job_title font-monospace">
                  FS Regulatory Manager
                </div>
                <div className="item_company_title">
                  <a
                    href="https://seaboardtriumphfoods.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Seaboard Triumph Foods (STF)
                  </a>
                </div>
              </li>

              <li className="item neo_brutalism_shadow">
                <div className="item_timespan">Aug 2020-Nov 2022</div>
                <div className="item_job_title font-monospace">
                  Regulatory Program Supervisor
                </div>
                <div className="item_company_title">
                  <a
                    href="https://hylife.com/windom/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    HyLife Foods Windom, LLC
                  </a>
                </div>
              </li>

              <li className="item neo_brutalism_shadow">
                <div className="item_timespan">May 2020-Aug 2020</div>
                <div className="item_job_title font-monospace">
                  Quality Assurance Lab Technician
                </div>
                <div className="item_company_title">
                  <a
                    href="https://comfreyfarmpork.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Comfrey Farm Prime Pork LLC
                  </a>
                </div>
              </li>

              <li className="item neo_brutalism_shadow">
                <div className="item_timespan">Aug 2017-May2020</div>
                <div className="item_job_title font-monospace">
                  Graduate Teaching Assistant
                </div>
                <div className="item_company_title">
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

          <div className="experience__imgs_grid" ref={experienceRef}>
            {experienceImages.map((img, index) => (
              <img key={index} src={img} alt="Bina Rai's experience" />
            ))}
          </div>
        </div>
      </div>

      <div
        className="organizations__section_wrapper mt-5"
        ref={organizationsRef}
      >
        <h2 className="text-center font-monospace fw-bold heading">
          Affiliated Organizations
        </h2>
        <div className="logos_section">
          <RouterLink
            to="https://www.mnsu.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../../img/minnesota-state-university.png")}
              alt="Logo"
              style={{ width: "15rem", height: "auto" }}
            />
          </RouterLink>

          <RouterLink
            to="https://hylife.com/windom/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../../img/hylife.png")}
              alt="Logo"
              style={{ width: "8rem", height: "auto" }}
            />
          </RouterLink>
          <RouterLink
            to="https://comfreyfarmpork.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../../img/comfrey-farm.png")}
              alt="Logo"
              style={{ width: "18rem" }}
            />
          </RouterLink>
          <RouterLink
            to="https://seaboardtriumphfoods.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../../img/STF_logo.png")}
              alt="Logo"
              style={{ width: "15rem", height: "auto" }}
            />
          </RouterLink>
        </div>
      </div>
    </>
  );
}
