require("dotenv").config();
const mongoose = require("mongoose");
const SSLCommerzPayment = require("sslcommerz-lts");
const Payment = require("../../Model/userPaymentDetails");
const store_id = process.env.STOREID;
const store_passwd = process.env.STOREPSS;
const is_live = false; //true for live, false for sandbox
const postSslPayments = async (req, res) => {
  const transactionId = new mongoose.Types.ObjectId().toString();

  const data = {
    total_amount: parseInt(req?.body?.price),
    currency: "BDT",
    tran_id: transactionId, // use unique tran_id for each api call
    success_url: `http://localhost:5000/payment/success/${transactionId}`,
    fail_url: `http://localhost:5000/payment/failed/${transactionId}`,
    cancel_url: "http://localhost:3030/cancel",
    ipn_url: "http://localhost:3030/ipn",
    shipping_method: "Courier",
    product_name: "Computer.",
    product_category: "Electronic",
    product_profile: "general",
    cus_name: req?.body?.participantName,
    cus_email: req?.body?.email,
    cus_add1: "Dhaka",
    cus_add2: "Dhaka",
    cus_city: "Dhaka",
    cus_state: "Dhaka",
    cus_postcode: "1000",
    cus_country: "Bangladesh",
    cus_phone: "01711111111",
    cus_fax: "01711111111",
    ship_name: "Customer Name",
    ship_add1: "Dhaka",
    ship_add2: "Dhaka",
    ship_city: "Dhaka",
    ship_state: "Dhaka",
    ship_postcode: 1000,
    ship_country: "Bangladesh",
  };

  const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
  sslcz.init(data).then(async (apiResponse) => {
    // Redirect the user to payment gateway
    let GatewayPageURL = apiResponse.GatewayPageURL;
    res.send({ url: GatewayPageURL });

    // initial data insert db an is payment false
    const orderData = {
      transactionId,
      ...req?.body,
      isPayment: false,
    };

    try {
      const newInfo = new Payment(orderData);
      await newInfo.save();
    } catch (error) {
      console.error(error);
    }
  });
};
module.exports = postSslPayments;
