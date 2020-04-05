const axios = require('axios');
const IpService = require('./ipapi.service');

const getCity = async (req) => {
  let city = await IpService.getCityByIp(req);
  console.log('Local city: ', city);
  return city;
}

const getWeatherLocation = async (req) => {
  try {
    let city = getCity(req);
  } catch(e) {
    throw new Error(e.message)
  }
}
  
module.exports = {
  getWeatherLocation
}