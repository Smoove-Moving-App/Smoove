const dbConnection = require('../models/dbConnection.js');
const cityController = {};

cityController.getDetails = async(req, res, next) => {
  try {
    console.log('in cityController')  
    const data = await fetch('https://api.teleport.org/api/urban_areas/slug:san-diego/details/')
    console.log(data)
    return next();
}
catch (err){
  return next({
    log: 'error in cityController.getDetails',
    status: 400,
    message: {err: 'error in cityController.getDetails'}, 
  });
}
}

module.exports = cityController;