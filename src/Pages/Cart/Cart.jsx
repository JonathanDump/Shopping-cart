import { useOutletContext } from "react-router-dom";
import cart from "./Cart.module.scss";
import React from "react";
import ItemInfo from "../../Components/itemInfo/ItemInfo";
import Transition from "../../animations/Transition";

export function Cart() {
  const { products, loading } = useOutletContext();
  const subtotal = +products?.reduce(
    (sum, item) => (sum += item.price * item.inCart),
    0
  );
  const tax = +(subtotal * 0.2).toFixed(2);
  const total = subtotal + tax;
  const count = products?.reduce((sum, item) => (sum += item.inCart), 0);

  if (loading) {
    return (
      <>
        <div className={cart.loading}>Loading...</div>)
        <Transition />
      </>
    );
  }

  if (!count) {
    return (
      <>
        <div className={cart.empty}>
          <div>The bag is empty</div>
        </div>
        <Transition />
      </>
    );
  }

  return (
    <>
      <div className={cart.cart}>
        <div className={cart.items}>
          {products.map((item) => {
            if (item.inCart) {
              return <ItemInfo key={item.id} item={item} />;
            }
          })}
        </div>
        <div className={cart.billingInfo}>
          <div className={cart.bill}>
            <div className={cart.text}>
              Subtotal<div>{subtotal}$</div>
            </div>
            <div className={`${cart.text} ${cart.tax}`}>
              Tax <div>{tax}$</div>
            </div>
            <div className={`${cart.text} ${cart.total}`}>
              Total <div>{total}$</div>
            </div>
            <button type="button">Checkout</button>
          </div>
        </div>
      </div>
      <Transition />
    </>
  );
}
