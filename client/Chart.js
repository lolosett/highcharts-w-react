import React, { Component } from 'react';
// import HighCharts from 'highcharts';
import ReactHighCharts from 'react-highcharts';

export default class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      config : {
        chart: {
          zoomType: 'x'
        },
        title: {
          text: "CHART"
        },
        xAxis: {
          categories: ['jan', 'feb', 'march', 'april', 'may', 'june', 'july']
        },
        series: [
          {
            data:[1,2,3,4,5,6,7]
          }
        ]
      }
    }
  }

  render() {
    return (
      <div>
        <ReactHighCharts config={this.state.config}></ReactHighCharts>
      </div>
    )
  }
}
