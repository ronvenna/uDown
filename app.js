//Dependencies
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.redirect('/index.html');
});

app.get('/create', function (req, res) {
  res.redirect('/create.html');
});

//Get the port
let port = process.env.PORT || 3000;

//Listen to the port and start our app!
app.listen(port, function() {
	let StartMessage = 'U Down has started! ';
	console.log(StartMessage);
});
