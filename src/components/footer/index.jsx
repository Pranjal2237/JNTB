import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <div className="footer page-padding">
      <div>
        Copyrights @ 2025{" "}
        <span style={{ color: "var(--color-blue)" }}>JNTB IMPORT EXPORT</span>.
        All rights Reserved.
      </div>
      <span>
        Powered By{" "}
        <a
          href="https://www.jntechno.com/"
        >
          {" "}
          JONAREN TECHNOLOGY
        </a>
        .
      </span>
    </div>
  );
};

export default Footer;
