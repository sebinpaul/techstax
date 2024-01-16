require("dotenv").config();
const express = require("express");
const Razorpay = require("razorpay");
const router = express.Router();
router.post("/orders", async (req, res) => {
  try {
    const requestBody = req.body;
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_SECRET,
    });
    const options = {
      amount: requestBody.amount * 100,
      currency: "INR",
      receipt: "74394",
    };

    const order = await instance.orders.create(options);
    if (!order) return res.status(500).send("Some error occured");
    res.json(order);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
