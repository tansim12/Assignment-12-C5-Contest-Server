const Payment = require("../../Model/userPaymentDetails");

const everyContestAllParticipant = async (req, res) => {
  try {
    const id = req.params._id;
    const page = parseInt(req.query.page);
    const size = parseInt(req.query.size);
    const skip = (page - 1) * size
    const result = await Payment.find({contestId:id}).skip(skip).limit(size)
    const participantCount = await Payment.find({contestId:id})
    const totalParticipantCount = participantCount.length
    
    if (result) {
      res.send({result , totalParticipantCount});
    }
  } catch (error) {
    console.error(error);
  }
};
module.exports = everyContestAllParticipant;
