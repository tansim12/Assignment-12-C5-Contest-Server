const express = require("express");
const jwtControlar = require("../../api/apiControlar/jwtColtrolar");
const router = express.Router();

router.post("/jwt", jwtControlar);
router.post("/logout", async (req, res) => {
  res
    .clearCookie("token", {
      maxAge: 0,
      secure: process.env.NODE_ENV === "production" ? true : false,
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    })
    .send({ success: true });
});

module.exports = router;
