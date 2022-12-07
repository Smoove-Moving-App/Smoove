const dbConnection = require("../models/dbConnection.js");
const usersController = {};
const bcrypt = require("bcrypt");

usersController.login = async (req, res, next) => {
  console.log('login hit')
  try {
    
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
    //const query = `INSERT INTO users (email, password) VALUES ('${email}', '${hashedPassword}');`;
    const query = `
      INSERT INTO users (email, password) 
      VALUES ('${email}', '${hashedPassword}');
      SELECT * FROM users WHERE email = '${email}';
      WHERE

      `
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

usersController.signUpLogin = async (req, res, next) => {
  try {
    
    // ask db if email/pw exist 
    // res.locals.user = {email, password}
    // put in bcrypt and await unhashing/compare !!!!
    // if true, return next()
    // give to FE to decide . 
    return next();
  } catch (err) {
    return next({
      log: "error in usersController.signUpLogin",
      status: 400,
      message: { err: "error in cityController.signUpLogin" },
    });
  }
};
module.exports = usersController;
