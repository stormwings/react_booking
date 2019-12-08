import React from "react";
import "./Button.scss";

export default function Button(props) {
  const { content, onClick, className } = props;

  return (
    <button
      type="button"
      className={className ? className : "button"}
      onClick={() => (onClick ? onClick() : defaultProps.onClick())}
    >
      <span>{content}</span>
    </button>
  );
}

const defaultProps = {
  onClick: () => console.log("onClick empty")
};
