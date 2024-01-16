import React from "react";
import css from "./Orders.module.css";
import OrderItem from "./OrderItem";

function Orders({ data, subTotalCb }) {
  let subTotal = 0;
  return (
    <div className={css.container}>
      <div className={css.orderTitle}>
        <h2>Your order</h2>
        <span>Add items +</span>
      </div>
      {data.map((item) => {
        subTotal = subTotal + item.price;
        return (
          <OrderItem
            key={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            quantity={item.quantity}
          />
        );
      })}
      {subTotalCb(subTotal)}
    </div>
  );
}

export default Orders;
