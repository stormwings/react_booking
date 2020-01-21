import React from "react";
import actions from "./../../../redux/actions";
import "./Store.scss";
import { connect } from "react-redux";

function Store({ products, addToCart }) {
  const handleAddToCart = product => () => {
    addToCart(product);
  };

  return (
    <div className="Products">
      <div className="Products-items">
        {products.map((product, i) => (
          <Product
            key={i}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

const mapDispatchToProps = {
  addToCart: actions.addToCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Store);

function Product({ product, handleAddToCart }) {
  return (
    <div className="Products-item">
      <img src={product.image} alt={product.title} />
      <div className="Products-item-info">
        <h2>
          {product.title} <span>{product.price}</span>
        </h2>
        <p>{product.description}</p>
      </div>
      <button type="button" onClick={handleAddToCart(product)}>
        Comprar
      </button>
    </div>
  );
}
