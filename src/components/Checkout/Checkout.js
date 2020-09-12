import React from "react";

import "./Checkout.css";
import { Subtotal } from "../Subtotal/Subtotal";
import { CheckoutProduct } from "../CheckoutProduct/CheckoutProduct";
import { useStateValue } from "../../context/StateProvider";

export const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="Checkout Ad Banner"
          className="checkout__ad"
        />
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket?.map(({ id, price, image, title, rating }, i) => (
            <CheckoutProduct
              id={id}
              price={price}
              image={image}
              title={title}
              rating={rating}
              key={i}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};
