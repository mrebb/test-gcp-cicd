var express = require('express');
var app = express();
const PORT = 8080;

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/ping', function (req, res) {
  res.send('pong!!');
});

app.listen(PORT);
console.log(`Running on http://localhost:${PORT}`);

