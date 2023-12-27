import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <hr />
      <footer className="footer__section_wrapper">
        <div className="footer_section small_text">
          <strong>
            <span>#WordOfTheGod:</span> O woman, great is your faith! Let it be
            done for you as you wish.
            <span> - Matthew 15:28</span>
          </strong>
        </div>
        <div className="copyright_text">
          <h6 className="text-center mt-3 mb-0 pb-2">© 2023 | Bina Rai</h6>
        </div>
      </footer>
    </>
  );
}
