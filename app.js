//Dependencies
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/*', function (req, res) {
  res.redirect('/index.html');
});

var server = app.listen(3000, function () {
  var port = server.address().port;

  console.log('Starter App Listening at port', port);
});