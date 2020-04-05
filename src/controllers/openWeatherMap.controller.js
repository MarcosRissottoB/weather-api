const OpenWeatherMapService = require('./../services/open-weather-map.service');

const getWeatherLocation = async (req, res, next) => {
    try {
        let weather = await OpenWeatherMapService.getWeatherLocation(req);
        res.json(weather);
        next();
    }
    catch (err) {
        console.log('ingresa al controller: error', err);
        res.status(500).send(err)
    }
}

// getCurrentCity() {
//     try {

//     }
//     catch (err) {
//         res.status(500).send(err)
//     }
// }

// getForecast() {
//     try {

//     }
//     catch (err) {
//         res.status(500).send(err)
//     }
// }

module.exports = {
    getWeatherLocation
};