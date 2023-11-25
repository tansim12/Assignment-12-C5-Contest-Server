const Contest = require("../../Model/contest");
const Payment = require("../../Model/userPaymentDetails");

const getMycontest = async (req, res) => {
  try {
    const email = req.params.email;
    const findByEmail = await Payment.find({ email: email });
    const getContestId = findByEmail?.map((item) => item?.contestId);
    const option = {
      _id: {
        $in: getContestId,
      },
    };
    const result = await Contest.find(option);
    res.send(result);
  } catch (error) {
    console.error(error);
  }
};

module.exports = getMycontest;
