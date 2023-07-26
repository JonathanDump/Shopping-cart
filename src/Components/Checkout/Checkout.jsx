import check from "./Checkout.module.scss";

import React from "react";
import { Button } from "../Button/Button";
import Transition from "../../animations/Transition";

export default function Checkout() {
  return (
    <>
      <div className={check.checkout}>
        <div className={check.window}>
          <div className={check.text}>Thank you for the purchase</div>
          <Button to="shop" className="checkout">
            Back to shopping
          </Button>
        </div>
      </div>
      <Transition />
    </>
  );
}
