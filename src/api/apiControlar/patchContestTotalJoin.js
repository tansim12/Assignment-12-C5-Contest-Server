const Contest = require("../../Model/contest");

const patchContestTotalJoin = async (req, res) => {
  try {
    const info = req.body.total_join;
    const id = req.params._id;
     await Contest.findOneAndUpdate(
      { _id: id }, // Filter condition: Find the document with this specific _id
      { $set: { total_join: info } }, // Update the 'totalJoin' field with the value of 'info'
      { new: true }
    );
    res.send({ success: true });
  } catch (error) {
    console.error(error);
  }
};
module.exports = patchContestTotalJoin;
