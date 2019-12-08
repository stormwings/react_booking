import React from "react";
import { BlockText } from "./../../dumb/BlockText/BlockText";

export default function Question({ textObject }) {
  return (
    <section id="question_panel">
      <div className="wrapper">
        <BlockText textsArray={[textObject]} />
      </div>
    </section>
  );
}
