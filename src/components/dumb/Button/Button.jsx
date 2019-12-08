import React from "react";
import PropTypes from "prop-types";
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
Button.propTypes = {
  content: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string
};

const defaultProps = {
  onClick: () => console.log("onClick empty")
};
