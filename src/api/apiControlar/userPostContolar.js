const Users = require("../../Model/User"); // Import your Mongoose model

const userPostController = async (req, res) => {
  const userInfo = req.body;
  const newUser = new Users(userInfo);
  const findEmail = await Users.findOne({ email: req.body.email });
  if (findEmail) {
    return res.send({ message: "success" });
  }
  const result = await newUser.save();

  res.send({ message: "success" });
};

module.exports = userPostController;
