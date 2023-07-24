import { useOutletContext } from "react-router-dom";
import cart from "./Cart.module.scss";

import React from "react";
import ItemInfo from "../../Components/itemInfo/ItemInfo";
import {
  decreaseItemInCart,
  handleInputChange,
  increaseItemInCart,
} from "../../functions/eventsHandlers";

export function Cart() {
  const { products, loading, setProducts } = useOutletContext();
  const subtotal = products?.reduce(
    (sum, item) => (sum += item.price * item.inCart),
    0
  );
  const tax = (subtotal * 0.2).toFixed(2);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={cart.cart}>
      Cart
      <div className={cart.items}>
        {products.map((item) => (
          <ItemInfo
            key={item.id}
            item={item}
            handleClickMinus={() =>
              decreaseItemInCart(products, setProducts, item.id)
            }
            handleClickPlus={() =>
              increaseItemInCart(products, setProducts, item.id)
            }
            handleInputChange={(e) =>
              handleInputChange(products, setProducts, item.id, e)
            }
          />
        ))}
      </div>
      <div className={cart.billingInfo}>
        <div className={cart.bill}>
          <div className={cart.text}>
            Subtotal <span>{subtotal}</span>
          </div>
          <div className={cart.text}>
            Tax <span>{tax}</span>
          </div>
          <div className={`${cart.text} ${cart.total}`}></div>
          <button type="button">Checkout</button>
        </div>
      </div>
    </div>
  );
}
