const Contest = require("../../Model/contest");

const deleteContest = async (req, res) => {
  try {
    const id = req.params._id;
    await Contest.deleteOne({ _id: id });
    res.send({ success: true });
  } catch (error) {
    console.error(error);
  }
};
module.exports=deleteContest
