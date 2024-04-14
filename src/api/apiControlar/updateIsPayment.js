const Payment = require("../../Model/userPaymentDetails");
const { updateOne } = require("../../Model/userPaymentDetails");


const updateIsPayment = async (req, res) => {
  try {
//    console.log(req?.params?.transactionId);
   const result = await Payment.updateOne({transactionId:req?.params?.transactionId},{$set:{isPayment:true}})
   if (result?.modifiedCount>0) {
    res.redirect(`http://localhost:5173/payment/success/${req?.params?.transactionId}`)
   }
  } catch (error) {
    console.error(error);
  }
};

module.exports = updateIsPayment;
