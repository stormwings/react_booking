import React from "react";

import { BlockText } from "./../../dumb/BlockText/BlockText";

export default function Guide({ textObject }) {
  // render the guide texts
  return (
    <section id="guide_panel">
      <div className="wrapper">
        <BlockText textsArray={textObject} />
      </div>
    </section>
  );
}
