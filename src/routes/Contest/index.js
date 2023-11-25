const express = require("express");
const getContest = require("../../api/apiControlar/getContest");
const findContest = require("../../api/apiControlar/findContest");
const patchContestTotalJoin = require("../../api/apiControlar/patchContestTotalJoin");

const router = express.Router();

router.get("/contests" ,getContest)
router.get("/contest/:_id" , findContest )
router.patch("/contest/:_id" , patchContestTotalJoin)
module.exports=router