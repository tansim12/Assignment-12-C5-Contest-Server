const express = require('express');
const postCreatorByContest = require('../../api/apiControlar/postCreatorByContest');

const router = express.Router()

router.post("/addContest" , postCreatorByContest)

module.exports= router