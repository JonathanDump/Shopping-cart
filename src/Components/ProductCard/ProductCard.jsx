import card from "./ProductCard.module.scss";

import React from "react";

export default function ProductCard({ item }) {
  const { name, price, image, isInCart } = item;
  return (
    <div className={card.card}>
      <div className={card.img}>
        <img src={image} alt="Product" />
      </div>
      <div className={card.info}>
        <div className={card.name}>{name}</div>
        <div className={card.price}>{price}</div>
      </div>
      <div className={isInCart ? card.inCart : card.cart}></div>
    </div>
  );
}
