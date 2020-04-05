const { Router } = require('express');

const router = Router();

// Controllers
const OpenWeatherMapController = require('./../controllers/openWeatherMap.controller');

router.get('/location', OpenWeatherMapController.getWeatherLocation);

router.get('/current/:city?', (req, res) => {
    res.json('current');
})

router.get('/forecast/:city?', (req, res) => {
    res.json('forecast');
})

module.exports = router;