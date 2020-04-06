const OpenWeatherMapService = require('../services/openWeatherMap.service');

const getWeatherLocation = async (req, res) => {
    try {
        let weather = await OpenWeatherMapService.getWeatherLocation(req);
        res.json(weather);
    }
    catch (err) {
        console.log('ingresa al controller: error', err);
        res.status(500).send(err)
    }
}

const getWeatherCurrentCity = async (req, res) => {
    try {
        let weather = await OpenWeatherMapService.getWeatherCurrentCity(req);
        res.json(weather);
    }
    catch (err) {
        console.log('ingresa al controller: error', err);
        res.status(500).send(err)
    }
}
const getWeatherForecast = async (req, res) => {
    try {
        let forecast = await OpenWeatherMapService.getWeatherForecast(req);
        res.json(forecast);
    }
    catch (err) {
        console.log('ingresa al controller: error', err);
        res.status(500).send(err)
    }
}

module.exports = {
    getWeatherLocation,
    getWeatherCurrentCity,
    getWeatherForecast
};