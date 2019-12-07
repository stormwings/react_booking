import React from "react";
import "./Button.scss";

export default function Button(props) {
  const { content, onClick } = props;

  return (
    <button
      type="button"
      className="button"
      onClick={() => (onClick ? onClick() : defaultProps.onClick())}
    >
      <span>{content}</span>
    </button>
  );
}

const defaultProps = {
  onClick: () => console.log("onClick empty")
};
