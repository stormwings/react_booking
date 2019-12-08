import React from "react";
import "./Hero.scss";

import Image from "../../dumb/Image/Image";
import Button from "../../dumb/Button/Button";
import { Title } from "../../dumb/BlockText/BlockText";
import Input, { InputDate, InputSelect } from "./../../dumb/Input/Input";

export default function Hero(props) {
  const { logo, subtitle, searchUrl } = props;

  return (
    <section id="hero_panel">
      <div className="wrapper">
        <Image image={logo} className={"hero--image"} />
        <Title content={subtitle} className={"hero--subtitle"} />
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
