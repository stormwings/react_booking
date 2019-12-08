import React from "react";
import "./Hero.scss";

import Brand from "./../../dumb/Brand/Brand";
import Button from "../../dumb/Button/Button";
import Input, { InputDate, InputSelect } from "./../../dumb/Input/Input";

const Subtitle = ({ className, content }) => (
  <h2 className={className ? className : ""}>{content}</h2>
);

export default function Hero(props) {
  const { logo, subtitle, searchUrl } = props;

  return (
    <section id="hero_panel">
      <div className="wrapper">
        <Brand image={logo} className={"hero--image"} />
        <Subtitle content={subtitle} className={"hero--subtitle"} />
        <div className="input--container">
          <Input name={"query"} placeholder={"Mendoza Provincia"} />
          <InputDate />
          <InputSelect />
          <Button
            content={"Buscar"}
            className={"input--button"}
            onClick={() => (window.location.href = searchUrl)}
          />
        </div>
      </div>
    </section>
  );
}
