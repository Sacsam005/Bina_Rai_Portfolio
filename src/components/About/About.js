import React from "react";
import { styled } from "styled-components";

const About = () => {
  return (
    <>
      <div className="about_section__wrapper mt-5">
        <h2 className="text-center">About me</h2>
        <Section className="about_section__container small_text d-flex justify-content-center align-items-stretch gap-2">
          <div className="about w-100 border border-dark">
            <h3 className="card_title py-2 text-center text-light bg-dark">
              What I am
            </h3>
            <ul>
              <li>Food Safety Regulatory Program Manager @STF</li>
              <li>EX Regulatory Program Supervisor @HyLife</li>
              <li>Major: Environmental Science</li>
              <li>Masters | Minnesota State University</li>
            </ul>
          </div>

          <div className="about w-100 border border-dark">
            <h3 className="card_title py-2 text-center text-light bg-dark">
              What I can do
            </h3>
            <ul className="list-unstyled px-2">
              <li>✔ Lead Improvement Team & Review Trends</li>
              <li>✔ Work as HACCP Coordinator</li>
              <li>✔ Manage Food Safety System</li>
              <li>✔ Train and develop QA technicians</li>
            </ul>
          </div>
        </Section>
      </div>
    </>
  );
};

export default About;

const Section = styled.div`
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
