import React from "react";
import { styled } from "styled-components";

export default function Footer() {
  return (
    <>
      <FooterSection className="footer_section_wrapper border border-2 border-dark mt-5 p-2 text-center">
        <div className="small_text">
          <strong>
            <span>#WordOfTheGod:</span> Strength and honor are her clothing; she
            is confident about the future.
            <span> - Proverbs 31:25</span>
          </strong>
        </div>
        <div className="copyright_text">
          <h6 className="text-center mt-3 mb-0 pb-2">
            © {new Date().getFullYear()} | Bina Rai
          </h6>
        </div>
      </FooterSection>
    </>
  );
}

const FooterSection = styled.div`
  border-bottom: none !important;

  strong span {
    color: #2909d9;
    font-weight: 500;
  }

  .copyright_text h6 {
    font-size: 1rem;
    font-weight: 600;
    text-shadow: none !important;
  }
`;
