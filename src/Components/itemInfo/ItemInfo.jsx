import { useOutletContext } from "react-router-dom";
import itemCl from "./ItemInfo.module.scss";

import React from "react";

export default function ItemInfo({ item }) {
  const { dispatch } = useOutletContext();
  const { name, price, image, inCart } = item;
  const total = price * inCart;

  return (
    <div className={itemCl.itemInfo}>
      <div className={itemCl.img}>
        <img src={image} alt="Product" />
      </div>
      <div className={itemCl.name}>{name}</div>
      <div className={itemCl.count}>
        <button
          type="button"
          onClick={() => dispatch({ type: "decreaseItemInCart", id: item.id })}
        >
          -
        </button>
        <input
          className={itemCl.input}
          value={inCart}
          onChange={(e) =>
            dispatch({
              type: "handleInputChange",
              id: item.id,
              value: e.target.value,
            })
          }
          type="number"
        />
        <button
          type="button"
          onClick={() => dispatch({ type: "increaseItemInCart", id: item.id })}
        >
          +
        </button>
      </div>
      <div className={itemCl.wrapper}>
        <div className={itemCl.total}>{total}$</div>
        <button
          type="button"
          onClick={() => dispatch({ type: "removeFromCart", id: item.id })}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
