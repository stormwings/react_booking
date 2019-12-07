import React from "react";
import "./Brand.scss";

export default function Brand({ image, className }) {
  return (
    <div className={className ? className : ""}>
      <img src={image} className="logo" alt="logo" />
    </div>
  );
}
