const express = require("express");
const getContest = require("../../api/apiControlar/getContest");

const router = express.Router();

router.get("/contests" ,getContest)
module.exports=router