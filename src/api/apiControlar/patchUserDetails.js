const Users = require("../../Model/User");

const patchUserDetails = async (req, res) => {
  try {
    const name = req.body.name;
    const findEmail = req.params.email;
    const image = req.body.image;
    await Users.findOneAndUpdate(
      { email: findEmail }, // Filter condition: Find the document with this specific _id
      { $set: { name: name, image: image } }, // Update the 'totalJoin' field with the value of 'info'
      { new: true }
    );
    res.send({ success: true });
  } catch (error) {
    console.error(error);
  }
};
module.exports = patchUserDetails;
