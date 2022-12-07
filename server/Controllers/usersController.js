const dbConnection = require("../models/dbConnection.js");
const usersController = {};
const bcrypt = require("bcrypt");
//user enters emai password
// userController.loginExistsCheck => does user exist ?
   // if user exists => userController.login
   // if user does not exist => userController.signUp


const saltRounds = 10;

usersController.login = async (req, res, next) => {
  const {email, password} = req.body;
  try {
    // access user from table with correct email
    const query = `SELECT * FROM users WHERE email = '${email}';`
    const result = await dbConnection.query(query);
    const {username} = result.rows[0];
    // access password encrypted password from same user
    const hashPass = result.rows[0].password;
    // compare encrypted password to hashPass, correctPass will be a boolean
    const correctPass = await bcrypt.compare(password, hashPass);
    res.locals.response = {username: username, email: email, success: correctPass};
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
  console.log ("signUp hit")
  console.log(req.body.email)
  console.log (req.body.password)
  const { email, password } = req.body;
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const query = `INSERT INTO users (email, password) VALUES ('${email}', '${hashedPassword}');`;
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
// check to see if user exists
usersController.validateUSer = async (req, res, next) => {
  console.log('loginCheck hit')
  const { email, password } = req.body;
  try {
    const  data  =  await client.query(`SELECT * FROM users WHERE email= $1;`, [email]); //check if user already exists
    const arr = data.rows;
    if (arr.length > 0) {
      return res.status(400).send("User already exists");
    } // else => user does not exist => go to next middleware function => userController.signUp
    return next(); // go to next middleware function => userController.login
  }
  catch (err) {
    return next({
      log: "error in usersController.loginExistsCheck",
      status: 400,
      message: { err: "error in cityController.loginExistsCheck" },
    });
  }
};



usersController.signUpLogin = async (req, res, next) => {
 console.log ('signUpLogin hit')
 console.log (req.body.email)

try { 
  const { email, password } = req.body;
  `INSERT INTO users (name, email) VALUES ($1,$2);`, [user.email, user.password]
  await dbConnection.query(query);
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
// we only have one login page
// if the user enters the email 
// we check if the email is in the database
// if the email is in the database
// we check if the password is correct
// if the password is correct
// we redirect to the homepage
// if the password is incorrect
// we redirect to the login page
// if the email is not in the database
// we redirect to the login page

