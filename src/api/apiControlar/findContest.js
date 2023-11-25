const Contest = require("../../Model/contest");
const findContest = async (req, res) => {
  try {
    const id = req.params._id;
    const result = await Contest.findById(id);
    res.send(result);
  } catch (error) {
    console.error(error);
  }
};

module.exports = findContest;
