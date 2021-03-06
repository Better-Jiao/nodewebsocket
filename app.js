//app.js

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'index.html'));
});

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
    
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    io.emit('chat message', "你是不是傻");
  });

});

app.set('port', process.env.PORT || 3002);

var server = http.listen(app.get('port'), function() {
  console.log('start at port:' + server.address().port);
});