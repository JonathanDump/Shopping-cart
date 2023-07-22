import item from "./ItemInfo.module.scss";

import React from "react";

export default function ItemInfo({ name, image }) {
  return (
    <div className={item.itemInfo}>
      <div className={item.img}>
        <img src={image} alt="Product" />
      </div>
      <div className={item.name}>{name}</div>
      <div className={item.count}>
        <button type="button">-</button>
        <input type="number" />
        <button type="button">+</button>
      </div>
      <div className={item.wrapper}>
        <div className={item.total}></div>
        <button type="button">Remove</button>
      </div>
    </div>
  );
}
