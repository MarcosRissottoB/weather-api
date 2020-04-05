const axios = require('axios');

const getLocalIp = (req) => {
    const { ip } = req.ipInfo;
    console.log('---- ip -----', ip);
}

const getCityByIp = async (req) => {
    let ip = getLocalIp(req);
    const { data } = await axios.get(`https://ipapi.co/${ip}/json/`);
    console.log(' ---- data ----', data);
}

module.exports = {
    getCityByIp
};