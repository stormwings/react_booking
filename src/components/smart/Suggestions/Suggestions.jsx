import React, { useState } from "react";
import Slider from "react-slick";
import "./Suggestions.scss";

import Card from "./../../dumb/Card/Card";
import Button from "./../../dumb/Button/Button";
import { Title } from "./../../dumb/BlockText/BlockText";

// slider configs
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1
};

export default function Suggestions({ suggestionsList }) {
  // get and build the object lists
  const { principals, suggestions } = suggestionsList;
  const principalList = { switchTab: false, list: principals };
  const suggestionList = { switchTab: true, list: suggestions };

  // create hook handler
  const [tab, setTab] = useState(suggestionList);

  // switch "list" after click
  const changeTab = () =>
    tab.switchTab ? setTab(principalList) : setTab(suggestionList);

  return (
    <section id="suggestions_panel">
      <div className="wrapper">
        <Title
          content={"¿No sabés a dónde viajar? Descubrí nuestras ideas."}
          className={"no-margin"}
        />
        <li role="tab" className="tabs__item">
          <Button
            content={"Ciudades Destacadas"}
            onClick={() => changeTab()}
            className={`tabs__label ${tab.switchTab ? "selected" : ""}`}
          />
          <Button
            content={"Ciudades Principales"}
            onClick={() => changeTab()}
            className={`tabs__label ${!tab.switchTab ? "selected" : ""}`}
          />
        </li>
        <div className="list">
          <Slider {...settings}>
            {tab.list.map(({ title, image, url, hotels, average }, i) => (
              <Card
                key={i}
                title={title}
                image={image}
                url={url}
                description={`${hotels} ${average}`}
                className="slider"
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
