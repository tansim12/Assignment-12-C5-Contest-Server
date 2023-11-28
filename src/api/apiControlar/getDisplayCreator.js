const Contest = require("../../Model/contest");

const getDisplayCreator = async (req, res) => {
  try {
    const creator = await Contest.find();
    const result = creator.slice(0, 3);
    console.log(result);
    res.send(result);
  } catch (error) {
    console.error(error);
  }
};
module.exports = getDisplayCreator;
