const axios = require('axios')
const { BASE_URL, API_KEY } = require('./../config/environments');
const IpService = require('./ipapi.service');

const getCity = async (req) => {
  const { city } = await IpService.getCityByIp(req);
  return city;
}

const getWeather = async (city) => {
  const url = `${BASE_URL}weather?q=${city},&appid=${API_KEY}&units=metric`;
  const { data } = await axios.get(url);
  return data;
}

const getForecast = async (city) => {
  const url = `${BASE_URL}forecast?q=${city},&appid=${API_KEY}&units=metric`;
  const { data } = await axios.get(url);
  return data;
}

const getWeatherLocation = async (req) => {
  try {
    const city = await getCity(req);
    const data = await getWeather(city);
    return data;
  } catch(e) {
    throw new Error(e.message);
  }
}

const getWeatherCurrentCity = async (req) => {
  try {
    const { city } = req.query;
    let data = {};
    city ? 
    data = await getWeather(city)
      : data = await getWeatherLocation(req);
    return data;
  } catch(e) {
    throw new Error(e.message)
  }
}

const getWeatherForecast = async (req) => {
  try {
    let { city } = req.query;
    let data = {};
    if (!city) {
      city = await getCity(req);
    }
    data = await getForecast(city);
    return data;
  } catch(e) {
    throw new Error(e.message)
  }
}

module.exports = {
  getWeatherLocation,
  getWeatherCurrentCity,
  getWeatherForecast,
  getWeather,
  getForecast
}