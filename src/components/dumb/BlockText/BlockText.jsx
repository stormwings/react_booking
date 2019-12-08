import React from "react";
import "./BlockText.scss";

// text types components

export const Title = ({ content, className }) => (
  <h2 className={`global--title ${className}`}>{content}</h2>
);

export const Subtitle = ({ content, className }) => (
  <h3 className={className ? className : "global--subtitle"}>{content}</h3>
);

export const Paragraph = ({ content }) => (
  <p className="global--subtitle">{content}</p>
);

export const BlockTextItem = ({ title, description, className }) => (
  <div className={`block--text--item ${className}`}>
    <Title content={title} />
    <Paragraph content={description} />
  </div>
);

export const BlockText = props => {
  // receives an array object that orders depending on the cuantity
  const { textsArray } = props;
  const isSingle = textsArray.length === 1 ? "single" : "double";

  return (
    <div className="block--text">
      {textsArray.map((text, i) => (
        <BlockTextItem key={i} {...text} className={isSingle} />
      ))}
    </div>
  );
};
