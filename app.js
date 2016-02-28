//Dependencies
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.redirect('/landing.html');
});

app.get('/create', function (req, res) {
  res.redirect('/create.html');
});

app.use(express.static(__dirname + '/public'));

//Get the port
let port = process.env.PORT || 3000;

//Listen to the port and start our app!
app.listen(port, function() {
	let StartMessage = 'U Down has started! ';
	console.log(StartMessage);
});
