const axios = require('axios');

const getLocalIp = (req) => {
    // This ip does not work
    const { ip } = req.ipInfo;
}

const getCityByIp = async (req) => {

    let ip = getLocalIp(req);
    const { data } = await axios.get(`http://ip-api.com/json/`);
    return data;
}

module.exports = {
    getCityByIp
};