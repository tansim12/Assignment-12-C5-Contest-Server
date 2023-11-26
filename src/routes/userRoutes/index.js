const express = require("express");
const userPostControlar = require("../../api/apiControlar/userPostContolar");
const getUsers = require("../../api/apiControlar/getUsers");
const patchUserDetails = require("../../api/apiControlar/patchUserDetails");
const getOneUser = require("../../api/apiControlar/getOneUser");
const getUserFindWinner = require("../../api/apiControlar/getUserFindWinner");
const getUserTotalParticipant = require("../../api/apiControlar/getUserTotalParticipant");

const router = express.Router();
router.post("/users", userPostControlar);
router.get("/users", getUsers);
router.get("/users/:email", getOneUser);
router.patch("/users/:email", patchUserDetails);
router.get("/userTotalWinner/:email" , getUserFindWinner)
router.get("/userTotalParticipant/:email" , getUserTotalParticipant)
module.exports = router;
