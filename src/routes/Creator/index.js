const express = require('express');
const postCreatorByContest = require('../../api/apiControlar/postCreatorByContest');
const getCreatorAllPostContest = require('../../api/apiControlar/getCreatorAllPostContest');

const router = express.Router()

router.post("/addContest" , postCreatorByContest)
router.get("/addContest/:email" , getCreatorAllPostContest)

module.exports= router