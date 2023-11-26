const Contest = require("../../Model/contest");
const Payment = require("../../Model/userPaymentDetails");

const getMycontest = async (req, res) => {
  try {
    const email = req.params.email;
    const sortField = req.query.sortField;
    const sortValue = req.query.sortValue;
    
    let sortObj = {}
    if (sortField && sortValue) {
        sortObj[sortField]=sortValue
    }
    const findByEmail = await Payment.find({ email: email });
    const getContestId = findByEmail?.map((item) => item?.contestId);
    const option = {
      _id: {
        $in: getContestId,
      },
    };

    const page = parseInt(req.query.page);
    const size = parseInt(req.query.size);
    const skip = (page - 1) * size;
    const result = await Contest.find(option).skip(skip).limit(size).sort(sortObj)
    const contestResult = await Contest.find(option)
    const totalParticipateContest = contestResult.length
    
    res.send({result , totalParticipateContest});
  } catch (error) {
    console.error(error);
  }
};

module.exports = getMycontest;
