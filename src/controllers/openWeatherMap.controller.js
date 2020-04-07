const OpenWeatherMapService = require('../services/openWeatherMap.service');

const getWeatherLocation = async (req, res) => {
    try {
        let data = await OpenWeatherMapService.getWeatherLocation(req);
        res.send(data);
    } catch (err) {
        res.status(500).send(err)
    }
}

const getWeatherCurrentCity = async (req, res) => {
    try {
        let data = await OpenWeatherMapService.getWeatherCurrentCity(req);
        res.send(data);
    } catch (err) {
        res.status(500).send(err)
    }
}
const getWeatherForecast = async (req, res) => {
    try {
        let data = await OpenWeatherMapService.getWeatherForecast(req);
        res.send(data);
    } catch (err) {
        res.status(500).send(err)
    }
}

module.exports = {
    getWeatherLocation,
    getWeatherCurrentCity,
    getWeatherForecast
};