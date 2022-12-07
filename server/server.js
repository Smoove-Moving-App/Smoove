const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const cors = require("cors");
const { Pool } = require("pg");
const dotenv = require("dotenv");
const dbConnection = require("./models/dbConnection.js");
const cityController = require("./Controllers/cityController.js");
const usersController = require("./Controllers/usersController.js");

app.use(express.json());
app.use(cors());

// app.use('/', (req, res) => {
//   return res.status(200).json('Hello??')
// })

app.post("/getDetails", cityController.getDetails, (req, res) => {
  console.log("back at server");
  return res.status(200).json(res.locals.cityDetails);
});

app.post("/login", usersController.login, (req, res) => {
  console.log(res.locals.response);
  return res.status(200).json(res.locals.response);
});

app.post("/signUp", usersController.signUp, usersController.signUpLogin, (req, res) => {
  return res.status(200).send("trying to signUp"); // add some sort of redirect to login 
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: "error in middleware",
    status: 404,
    message: { err: "error descrpition" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log("gEH", errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(port, () => console.log("Server listening to port", port));

// upon sign up => store email && pW
// Signup was successful 
// redirect to login (to login again)

// UC sends email, PW to DB (usercontroller.signup)
// ask DB for EMAIL, PW 
// take same email, pw
// pass through UC.login (usercontroller.signuplogin)
// hope success 
// redirect to homepage to search city. (res.redirect)
