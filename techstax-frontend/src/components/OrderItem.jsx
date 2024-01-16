import React from "react";
import css from "./OrderItem.module.css";

function OrderItem({ title, description, price, quantity }) {
  return (
    <div className={css.container}>
      <span className={css.quantity}>{quantity}</span>
      <div className={css.productDetails}>
        <span>{title}</span>
        <span>{description}</span>
      </div>
      <span>₹{price}.00</span>
    </div>
  );
}

export default OrderItem;
