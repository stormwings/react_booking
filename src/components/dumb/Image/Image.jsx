import React from "react";
import PropTypes from "prop-types";
import "./Image.scss";

export default function Image({ image, className, alt }) {
  return (
    <div className={className ? className : ""}>
      <img src={image} className="logo" alt={alt ? alt : "default"} />
    </div>
  );
}
Image.propTypes = {
  image: PropTypes.string,
  className: PropTypes.string,
  alt: PropTypes.string
};
