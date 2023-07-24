import itemCl from "./ItemInfo.module.scss";

import React from "react";

export default function ItemInfo({
  item,
  handleClickMinus,
  handleClickPlus,
  handleInputChange,
}) {
  const { name, price, image, inCart } = item;
  const total = price * inCart;

  return (
    <div className={itemCl.itemInfo}>
      <div className={itemCl.img}>
        <img src={image} alt="Product" />
      </div>
      <div className={itemCl.name}>{name}</div>
      <div className={itemCl.count}>
        <button type="button" onClick={handleClickMinus}>
          -
        </button>
        <input
          className={itemCl.input}
          value={inCart}
          onChange={handleInputChange}
          type="number"
        />
        <button type="button" onClick={handleClickPlus}>
          +
        </button>
      </div>
      <div className={itemCl.wrapper}>
        <div className={itemCl.total}>{total}$</div>
        <button type="button">Remove</button>
      </div>
    </div>
  );
}
