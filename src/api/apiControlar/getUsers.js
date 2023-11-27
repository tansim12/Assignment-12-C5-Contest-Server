const Users = require("../../Model/User");

const getUsers = async (req, res) => {
  const page = parseInt(req.query.page);
  const size = parseInt(req.query.size);
  const skip = (page - 1) * size
  const result = await Users.find().skip(skip).limit(size)
  const totalUserCount = await Users.estimatedDocumentCount()
  res.send({result ,  totalUserCount});
};
module.exports = getUsers;
