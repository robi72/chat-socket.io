var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
users = [];
connections = [];

server.listen(process.env.PORT || 3000);
console.log('server running');
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});
app.get('/happy', function (req, res) {
  res.send({ link: "https://media.giphy.com/media/l4pTfx2qLszoacZRS/giphy.gif" });
});
io.sockets.on("connection", function (socket) {
  connections.push(socket);
  console.log('Connected: %s sockets connected', connections.length);
});