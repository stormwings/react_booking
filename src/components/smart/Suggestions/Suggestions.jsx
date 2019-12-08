import React, { useState } from "react";
import Slider from "react-slick";
import "./Suggestions.scss";

import Card from "./../../dumb/Card/Card";
import Button from "./../../dumb/Button/Button";
import { Title } from "./../../dumb/BlockText/BlockText";
import { sliderSettings } from "./styles";

export default function Suggestions({ suggestionsList }) {
  // get and build the object lists
  const { principals, suggestions } = suggestionsList;
  const principalList = { switchTab: false, list: principals };
  const suggestionList = { switchTab: true, list: suggestions };

  // create hook handler (use suggestionlist as default)
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
        {/* tab button handler (change the list) */}
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
          <Slider {...sliderSettings}>
            {/* render the selected list */}
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
