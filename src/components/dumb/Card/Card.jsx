import React from "react";
import "./Card.scss";

export default function Card(props) {
  const { subtitle, url, title, description, image, className } = props;
  // onClick redirection
  const goToUrl = () => (window.location.href = url ? url : defaultProps.url);

  return (
    <div className={`card ${className}`} onClick={() => goToUrl()}>
      <img className="card-img" src={image} alt="magazine" />
      <span className="card-span">{subtitle}</span>
      <h1 className="card-title">{title}</h1>
      <p className="card-text">{description}</p>
    </div>
  );
}

const defaultProps = {
  url: "#"
};

// to render different many cards
export const CardList = ({ articles }) => {
  return articles.map((article, i) => <Card key={i} {...article} />);
};
