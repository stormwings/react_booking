import React from "react";
import "./Footer.scss";

import Brand from "./../../dumb/Brand/Brand";

export default function Footer({ logo }) {
  const year = new Date().getFullYear();

  return (
    <section id="footer_panel">
      <div className="footer__secondary">
        <Brand image={logo} className={"brand--logo"} />
        <Copyright year={year} />
      </div>
    </section>
  );
}

const Copyright = ({ year }) => (
  <small className="footer__copyright-text">
    Copyright {year} trivago | Todos los derechos reservados.
  </small>
);
