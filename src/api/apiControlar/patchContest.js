const Contest = require("../../Model/contest");

const patchContest = async (req, res) => {
  const id = req.params._id;
  const info = req.body;
  const option = { upsert: true };
  const updateDoc = {
    $set: {
      ...info,
    },
  };
  const result = await Contest.updateOne({ _id: id }, updateDoc, option);
  if (result) {
    res.send({ success: true });
  }
};
module.exports = patchContest;
