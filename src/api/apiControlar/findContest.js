const Contest = require("../../Model/contest");

const findContest = async (req, res) => {
  const id = req.params._id;

  const result = await Contest.findById(id);
  res.send(result);
};

module.exports = findContest;
