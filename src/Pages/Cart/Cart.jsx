import { useOutletContext } from "react-router-dom";
import cart from "./Cart.module.scss";
import React from "react";
import ItemInfo from "../../Components/itemInfo/ItemInfo";

export function Cart() {
  const { products, loading } = useOutletContext();
  const subtotal = +products?.reduce(
    (sum, item) => (sum += item.price * item.inCart),
    0
  );
  const tax = +(subtotal * 0.2).toFixed(2);
  const total = subtotal + tax;

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={cart.cart}>
      Cart
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
            Subtotal <span>{subtotal}$</span>
          </div>
          <div className={cart.text}>
            Tax <span>{tax}$</span>
          </div>
          <div className={`${cart.text} ${cart.total}`}>
            Total <span>{total}$</span>
          </div>
          <button type="button">Checkout</button>
        </div>
      </div>
    </div>
  );
}
