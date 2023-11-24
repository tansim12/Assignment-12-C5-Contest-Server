const express = require('express');
const userPostControlar = require('../../api/apiControlar/userPostContolar');
const getUsers = require("../../api/apiControlar/getUsers")
const router = express.Router()
router.post("/users",userPostControlar)
router.get("/users" , getUsers)

module.exports=router