import React from "react";
import "./Magazine.scss";

import Brand from "../../dumb/Brand/Brand";
import Card from "../../dumb/Card/Card";

export default function Magazine({ logo, magazines }) {
  return (
    <section id="magazine_panel">
      <div className="wrapper">
        <div className="brand--image">
          <Brand image={logo} className={"hero--image__logo"} />
        </div>
        <div className="list">
          {magazines.map((magazine, i) => (
            <Card key={i} {...magazine} />
          ))}
        </div>
      </div>
    </section>
  );
}
