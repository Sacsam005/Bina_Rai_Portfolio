import React from "react";
import "./Experience.css";

export default function Main() {
  return (
    <>
      <div className="experience_section__wrapper small_text mt-5 pb-3 px-1 w-100 border border-2 border-dark">
        <h2 className="text-center">Experience</h2>

        <p className="text-center">
          Results-oriented Food Safety & Quality Assurance Professional with
          experience in researching, developing, and implementing food safety
          plans and policies. Environmental toxicology graduate with a
          demonstrated history of working in the higher education research
          field.
        </p>

        <div className="experience_section d-flex justify-content-center w-100">
          <ul className="experience__items_list">
            <li className="item">
              <div className="item__timespan">Nov 2022-Present</div>
              <div className="item__job_title">FS Regulatory Manager</div>
              <div className="item__company_title">
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
              <div className="item__timespan">Aug 2020-Nov 2022</div>
              <div className="item__job_title">
                Regulatory Program Supervisor
              </div>
              <div className="item__company_title">
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
              <div className="item__timespan">May 2020-Aug 2020</div>
              <div className="item__job_title">
                Quality Assurance Lab Technician
              </div>
              <div className="item__company_title">
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
              <div className="item__timespan">Aug 2017-May2020</div>
              <div className="item__job_title">Graduate Teaching Assistant</div>
              <div className="item__company_title">
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
      </div>

      <div className="organizations_section__wrapper mt-5 w-100 border border-2 border-dark">
        <h2 className="text-center">Work Affiliations</h2>

        <div className="organization_logos">
          <img
            src={require("../../img/STF_logo.png")}
            alt="Seaboard Triumph Foods"
          />
          <img src={require("../../img/hylife.png")} alt="HyLife" />
          <img
            src={require("../../img/comfrey-farm.png")}
            alt="Comfrey Farm Pork"
          />
          <img
            src={require("../../img/minnesota-state-university.png")}
            alt="Minnesota State University"
          />
        </div>
      </div>
    </>
  );
}
