const dbConnection = require("../models/dbConnection.js");
const usersController = {};
const bcrypt = require("bcrypt");

usersController.login = async (req, res, next) => {
  try {
    console.log("in usersController");
    // const data = await fetch('https://api.teleport.org/api/urban_areas/slug:san-diego/details')
    // const res = await data.json();
    // console.log(res.categories);
    return next();
  } catch (err) {
    return next({
      log: "error in usersController.login",
      status: 400,
      message: { err: "error in cityController.login" },
    });
  }
};

usersController.signUp = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const query = `INSERT INTO users (email, password) VALUES ('${email}', '${hashedPassword}');`
    await dbConnection.query(query);
    return next();
  } catch (err) {
    return next({
      log: "error in usersController.signUp",
      status: 400,
      message: { err: "error in cityController.signUp" },
    });
  }
};

module.exports = usersController;
