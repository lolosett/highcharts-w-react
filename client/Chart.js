import React, { Component } from 'react';
// import HighCharts from 'highcharts';
import ReactHighCharts from 'react-highcharts';
import axios from 'axios';

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
        //map series data (conversions) to this property
        series: [{
            data:[2,2,4,5,213,324,1232,65462,324112432,63245145,845624134,3124214,2,3,4,5,6,7],
            pointStart: Date.UTC(2017, 0, 1),
            pointInterval: 3600 * 1000 * 24 //update per day
          }]
      }
    }
    this.getData = this.getData.bind(this);
  }
  //function to retrieve dummy data from server

  getData(){
    const that = this;
    console.log('inside getData');
    axios.get('/dummydata')
      .then(function(response){
        //collect data
        console.log('response: ', response)
        //create array of parsed data
        let filter = [];
        for(const obj in response.data){
          filter.push(parseInt(obj));
        }
        that.setState({config : })
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
