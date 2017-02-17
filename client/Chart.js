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
          type: 'datetime'
        },
        //map series data (conversions) to this prop
        series: [
          {
            data:[2,2,4,5,213,324,1232,65462,324112432,63245145,845624134,3124214,2,3,4,5,6,7],
            pointStart: Date.UTC(2017, 0, 1),
            pointInterval: 3600 * 1000 * 24 //update per day
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
