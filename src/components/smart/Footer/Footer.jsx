import React from "react";
import "./Footer.scss";

import Logo from "./../../../Logo";

export default function Footer(props) {
  return (
    <section id="footer_panel">
      <div className="footer__secondary">
        <Logo />
        <small className="footer__copyright-text">
          Copyright 2019 trivago | Todos los derechos reservados.{" "}
        </small>
      </div>
    </section>
  );
}
