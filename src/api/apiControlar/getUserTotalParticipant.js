const Payment = require("../../Model/userPaymentDetails");

const getUserTotalParticipant = async (req, res) => {
  const email = req.params.email;
  const totalPaymentData = await Payment.find({
    email: email,
  })

  const totalCount = totalPaymentData?.length
  
  res.send({totalCount});
};

module.exports = getUserTotalParticipant;
