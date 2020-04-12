const OpenWeatherMapService = require('../services/openWeatherMap.service');

const getWeatherLocation = async (req, res, next) => {
    try {
        let data = await OpenWeatherMapService.getWeatherLocation(req);
        res.send(data);
        next();
    } catch (err) {
        console.log(err);
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

const getWeatherCurrentCity = async (req, res, next) => {
    try {
        let data = await OpenWeatherMapService.getWeatherCurrentCity(req);
        res.send(data);
        next();
    } catch (err) {
        console.log(err);
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}
const getWeatherForecast = async (req, res, next) => {
    try {
        let data = await OpenWeatherMapService.getWeatherForecast(req);
        res.send(data);
        next();
    } catch (err) {
        console.log(err);
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

module.exports = {
    getWeatherLocation,
    getWeatherCurrentCity,
    getWeatherForecast
};