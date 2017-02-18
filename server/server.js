const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;
const Dummy = require('./dummydata-controller');

app.set('port', port);

app.use(express.static(path.join(__dirname, '../client')));

app.get('/', function(req, res){
  res.sendFile(__dirname + '../client/index.html')
});

app.get('/dummydata', function(req, res){
  res.send([{
		"test": "67",
	},
	{
		"test": "82",
	},
	{
		"test": "25",
	},
	{
		"test": "76",
	},
	{
		"test": "57",
	},
	{
		"test": "95",
	},
	{
		"test": "34",
	},
	{
		"test": "40",
	},
	{
		"test": "49",
	},
	{
		"test": "90",
	},
	{
		"test": "67",
	},
	{
		"test": "95",
	},
	{
		"test": "81",
	},
	{
		"test": "24",
	},
	{
		"test": "12",
	},
	{
		"test": "82",
	},
	{
		"test": "73",
	},
	{
		"test": "30",
	},
	{
		"test": "93",
	},
	{
		"test": "59",
	},
	{
		"test": "49",
	},
	{
		"test": "81",
	},
	{
		"test": "37",
	},
	{
		"test": "39",
	},
	{
		"test": "59",
	},
	{
		"test": "78",
	},
	{
		"test": "61",
	},
	{
		"test": "15",
	},
	{
		"test": "29",
	},
	{
		"test": "36",
	},
	{
		"test": "70",
	},
	{
		"test": "86",
	},
	{
		"test": "17",
	},
	{
		"test": "86",
	},
	{
		"test": "61",
	},
	{
		"test": "64",
	},
	{
		"test": "80",
	},
	{
		"test": "86",
	},
	{
		"test": "95",
	},
	{
		"test": "29",
	},
	{
		"test": "76",
	},
	{
		"test": "62",
	},
	{
		"test": "24",
	},
	{
		"test": "56",
	},
	{
		"test": "77",
	},
	{
		"test": "26",
	},
	{
		"test": "38",
	},
	{
		"test": "49",
	},
	{
		"test": "47",
	},
	{
		"test": "30",
	},
	{
		"test": "98",
	},
	{
		"test": "87",
	},
	{
		"test": "11",
	},
	{
		"test": "35",
	},
	{
		"test": "25",
	},
	{
		"test": "60",
	},
	{
		"test": "12",
	},
	{
		"test": "77",
	},
	{
		"test": "65",
	},
	{
		"test": "32",
	},
	{
		"test": "12",
	},
	{
		"test": "35",
	},
	{
		"test": "17",
	},
	{
		"test": "20",
	},
	{
		"test": "20",
	},
	{
		"test": "69",
	},
	{
		"test": "75",
	},
	{
		"test": "91",
	},
	{
		"test": "54",
	},
	{
		"test": "69",
	},
	{
		"test": "19",
	},
	{
		"test": "29",
	},
	{
		"test": "31",
	},
	{
		"test": "33",
	},
	{
		"test": "76",
	},
	{
		"test": "98",
	},
	{
		"test": "50",
	},
	{
		"test": "14",
	},
	{
		"test": "47",
	},
	{
		"test": "87",
	},
	{
		"test": "35",
	},
	{
		"test": "44",
	},
	{
		"test": "73",
	},
	{
		"test": "36",
	},
	{
		"test": "69",
	},
	{
		"test": "88",
	},
	{
		"test": "86",
	},
	{
		"test": "72",
	},
	{
		"test": "65",
	},
	{
		"test": "51",
	},
	{
		"test": "94",
	},
	{
		"test": "67",
	},
	{
		"test": "77",
	},
	{
		"test": "11",
	},
	{
		"test": "77",
	},
	{
		"test": "87",
	},
	{
		"test": "70",
	},
	{
		"test": "52",
	},
	{
		"test": "77",
	},
	{
		"test": "24",
	}])
});

app.listen(port);
console.log('server now listening on port ', port);
