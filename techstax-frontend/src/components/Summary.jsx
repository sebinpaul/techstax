import React from "react";
import css from "./Summary.module.css";

function Summary({
  subtotal,
  discount,
  deliveryFee,
  taxes,
  onSubmit,
  isPaymentDone,
}) {
  const total = subtotal + deliveryFee + taxes - discount + 0.0;
  return (
    <div className={css.container}>
      <div className={css.titleContainer}>
        <h2 className={css.title}>Summary</h2>
        <div className={css.summaryDetails}>
          <div className={css.rate}>
            <span>Subtotal</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>
          <div className={css.rate}>
            <span>Discount</span>
            <span>-₹{discount.toFixed(2)}</span>
          </div>
          <div className={css.rate}>
            <span>Delivery Fee</span>
            <span>₹{deliveryFee.toFixed(2)}</span>
          </div>
          <div className={css.rate}>
            <span>Taxes</span>
            <span>₹{taxes.toFixed(2)}</span>
          </div>
          <div className={css.total}>
            <span>Total</span>
            <span>₹{total}</span>
          </div>
        </div>
        {!isPaymentDone && (
          <button
            className={css.submitBtn}
            onClick={() => {
              onSubmit(total);
            }}
          >
            PLACE ORDER
          </button>
        )}
      </div>
    </div>
  );
}

export default Summary;
