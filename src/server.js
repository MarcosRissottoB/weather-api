const express = require('express');
const app = express();
const expressip = require('express-ip');

// Routes
const routes = require('./routes/index.routes');

// Settings
 app.set('port', process.env.PORT || 5000);
 app.set('trust proxy', true);

 // Middlewares
 app.use(expressip().getIpInfoMiddleware);

//Config headers http.
app.use( (req, res, next) =>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});



 // Routes
//  app.use('/api/v1', routes);
 app.use('/api/v1', routes);

module.exports = app;