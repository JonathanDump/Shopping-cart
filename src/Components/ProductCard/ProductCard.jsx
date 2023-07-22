import { addToCart } from "../../functions/eventsHandlers";
import card from "./ProductCard.module.scss";
import React from "react";

export default function ProductCard({ item, products, setProducts }) {
  const { name, price, image, inCart } = item;
  return (
    <div className={card.card}>
      <div className={card.img}>
        <img src={image} alt="Product" />
      </div>
      <div className={card.info}>
        <div className={card.name}>{name}</div>
        <div className={card.price}>{price}</div>
      </div>
      <div
        className={inCart ? card.inCart : card.cart}
        onClick={() => addToCart({ item, products, setProducts })}
      ></div>
    </div>
  );
}
