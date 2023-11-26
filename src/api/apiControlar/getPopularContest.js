const Contest = require("../../Model/contest");

// todo slice 6
const getPopularContest = async (req, res) => {
  try {
    const search = req.query.search;
    let queryObj = {};
    if (search) {
      queryObj.tag = { $regex: search, $options: "i" };
    }
    const data = await Contest.find(queryObj).sort({ total_join: "desc" })
    const result = data?.slice(0, 6);
    
    res.send(result);
  } catch (error) {
    console.error(error);
  }
};

module.exports = getPopularContest;
