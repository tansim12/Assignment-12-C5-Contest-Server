const express = require("express");
const userPostControlar = require("../../api/apiControlar/userPostContolar");
const getUsers = require("../../api/apiControlar/getUsers");
const patchUserDetails = require("../../api/apiControlar/patchUserDetails");
const getOneUser = require("../../api/apiControlar/getOneUser");

const router = express.Router();
router.post("/users", userPostControlar);
router.get("/users", getUsers);
router.get("/users/:email", getOneUser);
router.patch("/users/:email", patchUserDetails);

module.exports = router;
