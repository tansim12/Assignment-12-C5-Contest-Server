const express = require('express');
const userPostControlar = require('../../api/apiControlar/userPostContolar');
const router = express.Router()


router.post("/users",userPostControlar)

module.exports=router