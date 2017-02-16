const express = require('express');
const app = express();

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html')
});

app.set('port', process.env.PORT || 8080);
