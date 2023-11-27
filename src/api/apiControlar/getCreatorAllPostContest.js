const Contest = require("../../Model/contest");

const getCreatorAllPostContest = async (req, res) => {
  try {
    const email = req.params.email;
    const result = await Contest.find({ "creatorInfo.email": email });
    res.send(result);
  } catch (error) {
    console.error(error);
  }
};

module.exports = getCreatorAllPostContest;
