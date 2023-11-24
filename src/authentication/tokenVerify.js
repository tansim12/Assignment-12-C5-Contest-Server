require("dotenv").config();

const tokenVerify = async (req, res, next) => {
    const token = req.cookies.token;
  
    if (!token) {
      return res.status(401).send({ error: "unauthorize form token check" });
    }
    jwt.verify(token, process.env.SEC, (err, decoded) => {
      if (err) {
        return res.status(401).send({ error: "unauthorize form token verify" });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  };
  module.exports=tokenVerify