const axios = require('axios')
const openWeatherMapConfig = require('./../config/openWeatherMap.config');
const IpService = require('./ipapi.service');

const getCity = async (req) => {
  const city = await IpService.getCityByIp(req);
  return city;
}

const getWeather = async (city) => {
  const url = `${openWeatherMapConfig.baseUrl}weather?q=${city},&appid=${openWeatherMapConfig.apiKey}&units=metric`;
  const { data } = await axios.get(url);
  return data.main;
}

const getForecast = async (city) => {
  const url = `${openWeatherMapConfig.baseUrl}forecast?q=${city},&appid=${openWeatherMapConfig.apiKey}&units=metric`;
  const { data } = await axios.get(url);
  return data;
}

const getWeatherLocation = async (req) => {
  try {
    const { city } = await getCity(req);
    const weather = await getWeather(city);
    return weather;
  } catch(e) {
    throw new Error(e.message);
  }
}

const getWeatherCurrentCity = async (req) => {
  try {
    const { city } = req.query;
    let encodeCity = encodeURI( city );
    let weather = {};
    encodeCity ? 
      weather = await getWeather(encodeCity)
      : weather = await getWeatherLocation(req);
    return weather;
  } catch(e) {
    throw new Error(e.message)
  }
}

const getWeatherForecast = async (req) => {
  try {
    const { city } = req.query;
    let encodeCity = encodeURI( city );
    let forecast = {};
    encodeCity ? 
      forecast = await getForecast(encodeCity)
      : forecast = { message: 'Debe ingresar una ciudad', cnt: 0 };
    return forecast;
  } catch(e) {
    throw new Error(e.message)
  }
}

module.exports = {
  getWeatherLocation,
  getWeatherCurrentCity,
  getWeatherForecast
}