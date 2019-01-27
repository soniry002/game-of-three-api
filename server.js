var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
app.use(function (req, res, next) {

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);

  next();
});

var routes = require('./api/routes/gameOfThreeRoutes');
routes(app);
app.listen(port);

console.log('Game of Three RESTful API server started on: ' + port);