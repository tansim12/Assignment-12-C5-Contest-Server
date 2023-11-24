const Users = require("../../Model/User");










const getUsers = async (req, res) => {
  const result = await Users.find();
  res.send(result);
};
module.exports = getUsers
