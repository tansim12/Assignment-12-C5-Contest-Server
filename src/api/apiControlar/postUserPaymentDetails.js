const Payment = require("../../Model/userPaymentDetails");

const userPaymentDetails = async (req, res) => {
  try {
    const info = req.body;
    const newInfo = new Payment(info);
    await newInfo.save();
    res.send({ success:true });
  } catch (error) {
    console.error(error);
  }
};

module.exports = userPaymentDetails;
