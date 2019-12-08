import React from "react";
import "./Footer.scss";

import Image from "../../dumb/Image/Image";
import { Copyright } from "../../dumb/BlockText/BlockText";

export default function Footer({ logo }) {
  return (
    <section id="footer_panel">
      <div className="footer__secondary">
        <Image image={logo} className={"brand--logo"} />
        <Copyright className={"footer__copyright-text"} />
      </div>
    </section>
  );
}
