const supertest = require('supertest')
const app = require('../server');
const request = supertest(app);

const weatherResponse = require('./../__fixtures__/weatherResponse');

describe('Check Open Weather map routes ', () => {
    it('Endpoint: get location', async () => {
        const res = await request.get('/api/v1/location')
        const { name } = weatherResponse;
        expect(res.statusCode).toBe(200)
        expect(res.body[name]).toEqual(name)
    })
    it('Endpoint: get current city', async () => {
        const res = await request.get('/api/v1/current/:city?')
        expect(res.statusCode).toBe(200)
    })
    it('Endpoint: get current city', async () => {
        const res = await request.get('/api/v1/current/:city?')
            .query({ city: 'london' })
        expect(res.statusCode).toBe(200)
        expect(res.body.name).toEqual('London')
    })
    it('Endpoint: get forecast city', async () => {
        const res = await request.get('/api/v1/forecast/:city?')
            
        expect(res.statusCode).toBe(200)
    })
    it('Endpoint: get forecast city', async () => {
        const res = await request.get('/api/v1/forecast/:city?')
            .query({ city: 'Paris' })
        expect(res.statusCode).toBe(200)
    })
});
