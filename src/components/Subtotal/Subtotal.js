import React from "react";
import CurrencyFormat from "react-currency-format";

import "./Subtotal.css";

import { useStateValue } from "../../context/StateProvider";

export const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();

  const value =
    basket?.length > 0
      ? basket?.reduce((total, item) => {
          console.log(item.price);
          return total + item.price;
        }, 0)
      : 0;

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={value}
        displayType="text"
        thousandSeparator={true}
        prefix="$"
      />
      <button>Proceed to Checkout</button>
    </div>
  );
};
