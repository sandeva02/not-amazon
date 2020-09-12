import React from "react";

import "./Product.css";

export const Product = ({ id, title, image, price, rating }) => {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span role="img" aria-label="product rating">
                🌟
              </span>
            ))}
        </div>
      </div>

      <img src={image} alt={title} />

      <button>Add to Basket</button>
    </div>
  );
};