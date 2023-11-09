import React, { useEffect, useRef } from "react";
import { Link as RouterLink } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap-trial/all";
import createCustomAnimation from "../gsapFunction";
import "./Experience.css";

export default function Main() {
  const experienceRef = useRef(null);
  const organizationsRef = useRef(null);
  const experienceItemsRef = useRef(null);

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

    const experienceItems =
      experienceItemsRef.current.querySelectorAll(".item");
    const experienceImages = experienceRef.current.querySelectorAll(
      ".experience__imgs_grid img"
    );
    const organizationImages =
      organizationsRef.current.querySelectorAll(".logos_section img");

    createCustomAnimation(experienceItems, "x", "-10px", 0, "power1.inOut");

    animateBounceOut(experienceImages);
    animateBounceOut(organizationImages);
  }, []);

  return (
    <>
      <div
        className="experience__section_wrapper small_text default_padding_top"
        id="experience"
      >
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

        <div className="experience_section" ref={experienceItemsRef}>
          <div className="experience__timeline_cards">
            <ul className="experience__items_list">
              <li className="item">
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

              <li className="item">
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

              <li className="item">
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

              <li className="item">
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

      <div
        className="organizations__section_wrapper default_padding_top"
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
