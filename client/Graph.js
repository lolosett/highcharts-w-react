import React, {Component} from 'react';
const ReactDOM = require('react-dom');
const ReactHighcharts = require('react-highcharts');

const config = {
  chart: {
    renderTo: 'container',
    type: 'stockChart'
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
