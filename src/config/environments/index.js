require('dotenv').config();
const DEVELOPMENT = require('./development');
const PRODUCTION = require('./production');

const { NODE_ENV } = process.env;

let currentEnv = 'development';

NODE_ENV === 'production' ? currentEnv = PRODUCTION : currentEnv = DEVELOPMENT;

module.exports = currentEnv;


