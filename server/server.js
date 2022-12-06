const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const cors = require('cors');
const {Pool} = require('pg');
const dotenv = require('dotenv');
const dbConnection = require('./models/dbConnection.js');
const cityController = require('./Controllers/cityController.js');



app.use(cors())


// app.use('/', (req, res) => {
//   return res.status(200).json('Hello??')
// })

 app.get('/getDetails', cityController.getDetails, (req, res) => {
    console.log('back at server')
    return res.status(200).json(res.locals.cityDetails);
 })
 
app.use((err,req,res,next) => {
  const defaultErr = {
    log : 'error in middleware',
    status: 404,
    message: {err : 'error descrpition'},
  };
  const errorObj = Object.assign({}, defaultErr,err);
  console.log ('gEH', errorObj.log);
  return res.status (errorObj.status).json(errorObj.message);

});

app.listen(port, () => console.log('Server listening to port', port));
