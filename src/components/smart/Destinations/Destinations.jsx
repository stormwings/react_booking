import React from "react";
import "./Destination.scss";

// import { Subtitle } from "./../../dumb/BlockText/BlockText";
import { Subtitle } from "./../../dumb/BlockText/BlockText";

export default function Destinations({ destinations }) {
  const { featured, international } = destinations;

  return (
    <section id="list_panel">
      <div className="wrapper">
        <div className="location--list">
          <Subtitle
            content={"Más ciudades destacadas"}
            className={"location--title"}
          />
          <DestinationList list={featured} />
        </div>
        <div className="location--list">
          <Subtitle
            content={"Trivago internacional"}
            className={"location--title"}
          />
          <DestinationList list={international} />
        </div>
      </div>
    </section>
  );
}

const DestinationList = ({ list }) => (
  <ul className="location--container">
    {list.map((item, i) => (
      <DestinationItem key={i} {...item} />
    ))}
  </ul>
);

const DestinationItem = ({ url, name }) => (
  <li className="location--item">
    <a className="location--item__url" href={url}>
      {name}
    </a>
  </li>
);
