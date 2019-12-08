import React from "react";
import "./Image.scss";

export default function Image({ image, className, alt }) {
  return (
    <div className={className ? className : ""}>
      <img src={image} className="logo" alt={alt ? alt : "default"} />
    </div>
  );
}
