const Users = require("../../Model/User");

const getOneUser = async (req, res) => {
  try {
    const findEmail = req.params.email;
    console.log(findEmail);
    const result = await Users.findOne({email:findEmail});
    res.send(result);
  } catch (error) {
    console.error(error);
  }
};
module.exports = getOneUser;
