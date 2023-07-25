import { useOutletContext } from "react-router-dom";
import card from "./ProductCard.module.scss";
import React from "react";

export default function ProductCard({ item }) {
  const { dispatch } = useOutletContext();
  const { name, price, image, inCart } = item;
  return (
    <div className={card.card}>
      <div className={card.img}>
        <img src={image} alt="Product" />
      </div>
      <div className={card.info}>
        <div className={card.name}>{name}</div>
        <div className={card.price}>{price}$</div>
      </div>
      <div
        data-title={inCart ? "Remove from bag" : "Add to bag"}
        className={inCart ? card.inCart : card.cart}
        onClick={() => {
          const type = inCart ? "removeFromCart" : "addToCart";
          dispatch({ type: type, id: item.id });
        }}
      ></div>
    </div>
  );
}
