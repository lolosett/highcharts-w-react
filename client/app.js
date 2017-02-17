import React, {Component} from 'react';
const ReactDOM = require('react-dom');
const ReactHighcharts = require('react-highcharts');

const config = {
  chart: {
    renderTo: 'main',
    type: 'bar'
  },
  title: {
    text: 'Please work'
  },
  xAxis: {
    categories: ['jan', 'feb', 'march', 'april', 'may', 'june', 'july']
  },
  yAxis: {
    title: {
      text: 'a bunch of numbers'
    }
  },
  series: [1,2,3,4,5,6,7]
}

const app = (
  <ReactHighcharts config={config}></ReactHighcharts>
)

ReactDOM.render(app, document.getElementById('main'));




















// import React from 'react';
// import ReactDOM from 'react-dom';
// import {Router, Route} from 'react-router';
// import Graph from '/Graph.js'
//
// ReactDOM.render(
//   <Router>
//     <Route path='/' component={Graph}>
//   </Router>
//   , getElementById('main'))
