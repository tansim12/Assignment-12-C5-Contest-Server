const Users = require("../../Model/User"); // Import your Mongoose model

const userPostController = async (req, res) => {
  const userInfo = req.body
  const newUser = new Users(userInfo);
  const result = await newUser.save();
  
  res.send({message:"success"});
};

module.exports = userPostController;
