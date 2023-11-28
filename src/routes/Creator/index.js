const express = require('express');
const postCreatorByContest = require('../../api/apiControlar/postCreatorByContest');
const getCreatorAllPostContest = require('../../api/apiControlar/getCreatorAllPostContest');
const everyContestAllParticipant = require('../../api/apiControlar/getEveryContestAllParticipant');

const router = express.Router()

router.post("/addContest" , postCreatorByContest)
router.get("/addContest/:email" , getCreatorAllPostContest)
router.get("/everyContestParticipants/:_id" , everyContestAllParticipant)

module.exports= router