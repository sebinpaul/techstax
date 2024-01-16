import "./App.css";
import Hero from "./components/Hero";
import heroImg from "./assets/hero.svg";
import Orders from "./components/Orders";
import { data, deliveryFee, discount, taxes } from "./constants";
import Summary from "./components/Summary";
import { useState } from "react";
import axios from "axios";
import Modal from "./components/Modal";

function App() {
  const [subTotal, setSubTotal] = useState(0);
  const [isPaymentDone, setIsPaymentDone] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [payableAmount, setPayableAmount] = useState(0);
  async function displayRazorpay(amt) {
    const requestData = {
      amount: amt,
    };
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Razorpay script failed to load.");
      return;
    }
    const result = await axios.post(
      "http://localhost:5000/payment/orders",
      requestData
    );
    if (!result) {
      alert("Server error occured.");
      return;
    }
    const { amount, id: order_id, currency } = result.data;
    const options = {
      key: "rzp_test_mGtVbUWNSNAY9X",
      amount: amount.toString(),
      currency: currency,
      name: "TSX Pizzerias",
      description: "Test Transaction",

      order_id: order_id,
      handler: async function (response) {
        console.log(response);
        setOrderId(response.razorpay_order_id);
        setIsPaymentDone(true);
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  function subTotalCb(subTotal) {
    setSubTotal(subTotal);
  }
  function handlePaymentSubmission(amount) {
    setPayableAmount(amount);
    displayRazorpay(amount);
  }

  return (
    <div className="App">
      <Hero heroImg={heroImg} />
      <Orders data={data} subTotalCb={subTotalCb} />
      <Summary
        subtotal={subTotal}
        discount={discount}
        deliveryFee={deliveryFee}
        taxes={taxes}
        isPaymentDone={isPaymentDone}
        onSubmit={handlePaymentSubmission}
      />
      {isPaymentDone && (
        <Modal orderId={orderId} totalAmount={payableAmount} isOpen={true} />
      )}
    </div>
  );
}

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

export default App;
