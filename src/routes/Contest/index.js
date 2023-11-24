const express = require("express");
const getContest = require("../../api/apiControlar/getContest");
const findContest = require("../../api/apiControlar/findContest");

const router = express.Router();

router.get("/contests" ,getContest)
router.get("/contest/:_id" , findContest )
module.exports=router