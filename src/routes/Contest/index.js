const express = require("express");
const getContest = require("../../api/apiControlar/getContest");
const findContest = require("../../api/apiControlar/findContest");
const patchContestTotalJoin = require("../../api/apiControlar/patchContestTotalJoin");
const Contest = require("../../Model/contest");
const ContestTag = require("../../Model/contestTag");

const router = express.Router();

router.get("/contests", getContest);
router.get("/contest/:_id", findContest);
router.patch("/contest/:_id", patchContestTotalJoin);
router.post("/contests", async (req, res) => {
  try {
    const info = req.body;
    const result = await Contest.insertMany(info);
    res.send(result);
  } catch (error) {
    console.error(error);
  }
});
router.post("/contestTag" , async(req , res)=>{
  const result = await ContestTag.insertMany(req.body)
  res.send(result)
})
router.get("/contestTag" , async(req , res)=>{
  const result = await ContestTag.find()
 
  res.send(result)
})
module.exports = router;
