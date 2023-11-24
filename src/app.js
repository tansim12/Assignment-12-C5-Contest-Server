const express = require("express");
require("dotenv").config();
const globalErrorHandler = require("./utils/globalErrorHandler");
const dbConnect = require("./db/dbConnect");
const normalMiddleware = require("./middleware/normalMiddleware");
const app = express();
const port = process.env.PORT || 5000;
const userRoutes = require("./routes/userRoutes/index")
const authenticationRoute = require("./routes/AuthenticationRoute/index")
const contestRoute = require("./routes/Contest/index")



// normal middleware
normalMiddleware(app);

// authentication route 
app.use(authenticationRoute)

// user route 
app.use(userRoutes)

// contest route 
app.use(contestRoute)





app.get("/health", (req, res) => {
  res.send("Assignment 12 running ");
});

app.all("*", (req, res, next) => {
  const error = new Error(`Can't find ${req.url} on the server`);
  error.status = 404;
  next(error);
});

// error handling middleware
app.use(globalErrorHandler);

const main = async () => {
  await dbConnect();
  app.listen(port, () => {
    console.log(`Assignment 12 is running ${port}`);
  });
};

main();
