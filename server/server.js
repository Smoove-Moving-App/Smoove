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

app.get("/getDetails", cityController.getDetails, (req, res) => {
  console.log("back at server");
  return res.status(200).json(res.locals.cityDetails);
});

app.post("/login", usersController.login, (req, res) => {
  console.log("login hit");
  return res.status(200).send("trying to login");
});

app.post("/signUp", usersController.signUp, (req, res) => {
  return res.status(200).send("trying to signUp");
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
