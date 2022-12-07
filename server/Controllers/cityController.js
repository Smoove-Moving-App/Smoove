const dbConnection = require("../models/dbConnection.js");
const cityController = {};

cityController.getDetails = async (req, res, next) => {
  try {
    console.log(req.body);
    const { city } = req.body;
    const data = await fetch(
      `https://api.teleport.org/api/urban_areas/slug:${city}/scores`
    );
    const details = await data.json();
    res.locals.cityDetails = details;
    console.log(res);
    return next();
  } catch (err) {
    return next({
      log: "error in cityController.getDetails",
      status: 400,
      message: { err: "error in cityController.getDetails" },
    });
  }
};

module.exports = cityController;
