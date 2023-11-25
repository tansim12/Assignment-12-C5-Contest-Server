const Payment = require("../../Model/userPaymentDetails");

const userPaymentDetails = async (req, res) => {
    const info = req.body;
    const newInfo = new Payment(info);
    const paymentResult = await newInfo.save()
    console.log(paymentResult);
    res.send({ paymentResult });
  }

  module.exports=userPaymentDetails