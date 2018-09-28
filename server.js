var cors = require('cors')
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/zokushaModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Productdb', { useNewUrlParser: true }); 

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/zokushaRoutes');
routes(app);

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);

app.use((req, res) => {
  res.status(404).send({url: req.originalUrl + ' not found'})
});
