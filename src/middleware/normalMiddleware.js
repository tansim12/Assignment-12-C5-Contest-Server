const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const normalMiddleware = (app) => {
  app.use(
    cors({
      origin: [
        "https://bright-crisp-282e3c.netlify.app",
        "http://localhost:5173",
        "http://localhost:5174",
      ],
      credentials: true,
    })
  );
  app.use(express.json());
  app.use(cookieParser());
};
module.exports = normalMiddleware;
