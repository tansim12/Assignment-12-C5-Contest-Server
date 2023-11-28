const express = require('express');
const getMycontest = require('../../api/apiControlar/getMycontest');


const router = express.Router()
router.get("/myContest/:email" , getMycontest )

module.exports=router