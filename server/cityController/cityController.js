const dbConnection = require('./models/dbConnection.js');
const cityController = {};

cityController.getDetails = async(req, res, next) => {
  try {
    console.log('inside cityController')
    const data = await fetch('https://api.teleport.org/api/urban_areas/slug:san-diego/details/')
    res.locals.cityDetails = data;
    console.log('got data from API')
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