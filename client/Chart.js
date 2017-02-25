import React, { Component } from 'react';
import ReactHighCharts from 'react-highcharts';
import axios from 'axios';
import update from 'react-addons-update';

export default class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      config : {
        chart: {
          style: {
            fontFamily: "'Open Sans', sans-serif"
          },
          zoomType: 'x',
          className: 'chart',
          backgroundColor:'#3e3e54',
          color: '#9f9faa'
        },
        legend : {
          enabled: false
        },
        title: {
          text: "Example Cumulative Conversion Rate",
          style: {
            color: '#9f9faa',
            fontSize: '45px'
          }
        },

        xAxis: {
          type: 'datetime',
          title: {
            text: "Date",
            style: {
              color:'#9f9faa',
              'fontSize': '20px'
            }
          },
          labels: {
            autoRotation: [-90],
            style: {
              color: '#9f9faa'
            }
          },
          gridLineColor: '#525265'
        },

        yAxis: {
          title: {
            text: "Cumulative Conversion Rate",
            style: {
              color: '#9f9faa',
              fontSize: '20px'
            }
          },
          labels: {
            style: {
              color: '#9f9faa'
            }
          }
        },
        colors: ['#57bf93'],
        series: [{
            data: [1,2,3,5,6,3,4,21,2],
            pointStart: Date.UTC(2017, 1, 1),
            pointInterval: 3600 * 1000 * 24, //update per day
            name: 'CCR'
          }]
      }
    }
    this.getData = this.getData.bind(this);
  }
  //function to retrieve dummy data from server


  getData(){
    axios.get('/dummydata')
      .then(response => {
        //collect data, push parsed values into new array
        let filter = [],
            dataCollection = response.data.experiment.variations[0].conversion_rate_hourly;
            console.log('dataCollection: ', dataCollection)

        dataCollection.forEach((val, index, collection) =>{
          filter.push([val.time, val.cumulative_conversion_rate]);
        })

        //Create a new series object with incoming data.
        let newSeries = [Object.assign({}, this.state.config.series[0], {data : filter})];

        this.setState({config: {...this.state.config, series: newSeries}});
      })
  }

  componentWillMount(){
    this.getData();
  }

  render() {
    return (
      <div>
        <ReactHighCharts config={this.state.config}></ReactHighCharts>
      </div>
    )
  }
}
