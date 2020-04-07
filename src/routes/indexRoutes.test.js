const supertest = require('supertest')
const app = require('../server');
const request = supertest(app);

describe('Check index routes ', () => {
    it('Endpoint: "/" ', async () => {
        const response = { message: 'Welcome to weather api'};
        const res = await request.get('/api/v1/')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toEqual(response)
    })
});