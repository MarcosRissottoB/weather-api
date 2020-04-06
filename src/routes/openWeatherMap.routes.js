const { Router } = require('express');
const router = Router();

// Controllers
const OpenWeatherMapController = require('../controllers/openWeatherMap.controller');

// Routes
router.get('/location', OpenWeatherMapController.getWeatherLocation);
router.get('/current/:city?', OpenWeatherMapController.getWeatherCurrentCity);
router.get('/forecast/:city?', OpenWeatherMapController.getWeatherForecast)

module.exports = router;