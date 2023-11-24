require("dotenv").config();
const jwt = require('jsonwebtoken');
const jwtControlar = async (req, res) => {
  const user = req.body;
  const token = jwt.sign(user, process.env.SEC, {
    expiresIn: "5h",
  });

  res
    .cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production" ? true : false,
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    })
    .send({ success: true });
};
module.exports = jwtControlar;
