import React from "react";
import "./Question.scss";

export default function Question(props) {
  return (
    <section id="question_panel">
      <div className="wrapper">
        <h2 className="global--title">
          ¿Necesitás ideas para tu próximo viaje?
        </h2>
        <p className="global--subtitle">
          Descubrí las mejores experiencias en hoteles en los más de 140
          artículos de trivago Magazine, desde hoteles boutique en Mendoza hasta
          casas de campo encantadoras en Córdoba.
        </p>
      </div>
    </section>
  );
}
