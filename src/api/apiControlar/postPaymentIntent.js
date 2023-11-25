require("dotenv").config();
const stripe = require("stripe")(process.env.SK);


const paymentIntant = async (req, res) => {
    const { price } = req.body;
    const priceValue = parseInt(price);
    const amount = priceValue * 100;
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      payment_method_types: ["card"],
      
    });
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  }
  module.exports=paymentIntant