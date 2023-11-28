const Contest = require("../../Model/contest");

const getCreatorAllPostContest = async (req, res) => {
  try {
    const page = parseInt(req.query.page);
    const size = parseInt(req.query.size);
    const skip = (page - 1) * size
    const email = req.params.email;
    const result = await Contest.find({ "creatorInfo.email": email }).skip(skip).limit(size)

    const dataCount = await Contest.find({ "creatorInfo.email": email })
    const totalCount = dataCount.length
    

    res.send({result, totalCount});
  } catch (error) {
    console.error(error);
  }
};

module.exports = getCreatorAllPostContest;
