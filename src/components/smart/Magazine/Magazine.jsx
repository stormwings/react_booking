import React from "react";
import "./Magazine.scss";

import Image from "../../dumb/Image/Image";
import { CardList } from "./../../dumb/Card/Card";

export default function Magazine({ logo, magazines }) {
  return (
    <section id="magazine_panel">
      <div className="wrapper">
        <div className="brand--image">
          <Image image={logo} className={"hero--image__logo"} />
        </div>
        <div className="list">
          <CardList articles={magazines} />
        </div>
      </div>
    </section>
  );
}
