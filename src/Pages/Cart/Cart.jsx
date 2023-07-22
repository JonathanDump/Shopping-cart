import cart from "./Cart.module.scss";

import React from "react";

export function Cart() {
  return (
    <div className={cart.cart}>
      Cart
      <div className={cart.items}></div>
      <div className={cart.billingInfo}>
        <div className={cart.bill}>
          <div className={cart.text}>
            Subtotal <span>{`subtotal`}</span>
          </div>
          <div className={cart.text}>
            Tax <span>0$</span>
          </div>
          <div className={`${cart.text} ${cart.total}`}></div>
          <button type="button">Checkout</button>
        </div>
      </div>
    </div>
  );
}
