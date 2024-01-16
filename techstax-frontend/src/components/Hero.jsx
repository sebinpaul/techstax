import FulfillmentCard from "./FulfillmentCard";
import css from "./Hero.module.css";
import { DELIVERY_STR } from "../constants";
import { PICKUP_STR } from "../constants";

import React from "react";

function Hero({ heroImg }) {
  return (
    <div className={css.container}>
      <img src={heroImg} alt="hero" />
      <div className={css.heroCard}>
        <FulfillmentCard
          className={css.card}
          tab1={DELIVERY_STR}
          tab2={PICKUP_STR}
          deliveryTime="25 mins"
          deliveryCharge="₹20"
        />
      </div>
    </div>
  );
}

export default Hero;
