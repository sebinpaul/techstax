import React from "react";
import css from "./FulFillmentCard.module.css";

function FulfillmentCard({ tab1, tab2, deliveryTime, deliveryCharge }) {
  return (
    <div className={css.container}>
      <h3>TSX Pizzerias</h3>
      <div className={css.tabs}>
        <span className={`${css.tab1} ${css.active}`}>{tab1}</span>
        <span className={`${css.tab2}`}>{tab2}</span>
      </div>
      <div className={css.deliveryDetails}>
        <span>{deliveryTime}</span>
        <span>{deliveryCharge}</span>
        <span>Discounts</span>
      </div>
      <div className={css.menuHours}>
        <span>Menu Hours: 10:00 AM to 11:00 PM</span>
      </div>
    </div>
  );
}

export default FulfillmentCard;
