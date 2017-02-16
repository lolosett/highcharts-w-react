const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;

app.set('port', port);

app.use(express.static(path.join(__dirname, '../client')));

app.get('/', function(req, res){
  res.sendFile(__dirname + '../client/index.html')
});

app.listen(port);
console.log('server now listening on port ', port);
