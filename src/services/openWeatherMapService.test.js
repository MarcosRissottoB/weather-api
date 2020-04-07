const supertest = require('supertest')
const app = require('../server');
const request = supertest(app);

const openWeatherMapService = require('./openWeatherMap.service');

// MockResponse
const weatherResponse = require('./../__fixtures__/weatherResponse');

describe('Check Open Weather map services ', () => {
    it('Get weather method', async () => {
        const city = 'London';
        const res = await openWeatherMapService.getWeather(city)
        const { name } = weatherResponse;
        expect(res[name]).toEqual(name)
    })
    it('Get forecast method', async () => {
        const city = 'London';
        const res = await openWeatherMapService.getForecast(city)
        expect(res.cnt).not.toBe(0);
        expect(res.city.country).toContain('GB')
    })
});
