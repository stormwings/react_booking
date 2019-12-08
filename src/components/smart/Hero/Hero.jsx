import React from "react";
import "./Hero.scss";

import Brand from "./../../dumb/Brand/Brand";

const Subtitle = ({ className, content }) => (
  <h2 className={className ? className : ""}>{content}</h2>
);

export default function Hero(props) {
  const { logo, subtitle } = props;

  return (
    <section id="hero_panel">
      <div className="wrapper">
        <Brand image={logo} className={"hero--image"} />
        <Subtitle content={subtitle} className={"hero--subtitle"} />
      </div>
    </section>
  );
}
