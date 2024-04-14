const Payment = require("../../Model/userPaymentDetails");



const failedSslPayment = async (req, res) => {
  try {
//    console.log(req?.params?.transactionId);
   const result = await Payment.deleteOne({transactionId:req?.params?.transactionId})
   if (result?.deletedCount) {
    res.redirect(`http://localhost:5173/payment/failed/${req?.params?.transactionId}`)
   }
  } catch (error) {
    console.error(error);
  }
};

module.exports = failedSslPayment;