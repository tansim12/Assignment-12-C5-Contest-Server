const Users = require("../../Model/User");

const patchUserDetails = async (req, res) => {
  try {
    const info = req.body
    const findEmail = req.params.email;
    await Users.findOneAndUpdate(
      { email: findEmail }, // Filter condition: Find the document with this specific _id
      { $set: { ...info } }, // Update the 'totalJoin' field with the value of 'info'
      { new: true }
    );
    res.send({ success: true });
  } catch (error) {
    console.error(error);
  }
};
module.exports = patchUserDetails;
