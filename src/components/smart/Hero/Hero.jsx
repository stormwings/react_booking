import React from "react";
import "./Hero.scss";

export default function Hero(props) {
  return (
    <section id="hero_panel">
      <div className="wrapper">
        <div className="hero--image">
          <img
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Trivago.svg/1280px-Trivago.svg.png"
            }
            className="hero--image__logo"
            alt="logo"
          />
        </div>
        <h2 className="hero--subtitle">
          Encontrá tu hotel ideal y compará precios de diferentes páginas web
        </h2>
      </div>
    </section>
  );
}
