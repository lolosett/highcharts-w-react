import React, { Component } from 'react';
import ReactHighCharts from 'react-highcharts';
import axios from 'axios';
import update from 'react-addons-update';

export default class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      COT: [],
      CCR: [],
      config : {
        chart: {
          style: {
            // fontFamily: "'Open Sans', sans-serif"
            fontFamily: "'Raleway', sans-serif"
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
        colors: ['#57bf93', '#6e25b7', '#b8e986', '#4886d2'],
        series: [{
            data: [1,2,3,5,6,3,4,21,2],
            pointStart: Date.UTC(2017, 1, 1),
            pointInterval: 3600 * 1000 * 24, //update per day
            name: 'CCR'
          }]
      }
    }
    this.getData = this.getData.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  //function to retrieve dummy data from server


  getData(){
    axios.get('/dummydata')
      .then(response => {
        //storage will replace current config.series
        let CCRstorage = [];
        let COTstorage = [];
        let dataCollection = response.data.experiment.variations;
        console.log('dataCollection: ', dataCollection);

          dataCollection.forEach((val, i, coll)=>{
              let CCRdata = [];
              let COTdata = [];
              val.conversion_rate_hourly.forEach((item, index, collection)=>{
                CCRdata.push([item.time, item.cumulative_conversion_rate]);
                COTdata.push([item.time, item.conversions]);
              })
              CCRstorage.push(
                {
                  data: CCRdata,
                  pointStart: val.conversion_rate_hourly[0].time,
                  pointInterval: 3600 * 1000 * 24, //update per day
                  name: val.id
                }
              );
              COTstorage.push({
                data: COTdata,
                pointStart: val.conversion_rate_hourly[0].time,
                pointInterval: 3600 * 1000 * 24, //update per day
                name: val.id
              })
              CCRdata = [];
              COTdata = [];
          });

        this.setState({COT: COTstorage, CCR: CCRstorage, config: {...this.state.config, series: CCRstorage}});
      })
  }

  componentWillMount(){
    this.getData();
  }

  handleChange(e){
    if(e.target.value === "COT") {
      this.setState({config: {...this.state.config, series: this.state.COT}})
    } else {
      this.setState({config: {...this.state.config, series: this.state.CCR}})
    }
  }

  render() {
        return (
        <div>
          <select className="dropdown" onChange={this.handleChange}>
            <option value="CCR">Cumulative Conversion Rate</option>
            <option value="COT">Conversions @ Time</option>
          </select>
          <ReactHighCharts config={this.state.config}></ReactHighCharts>
        </div>
      )
  }
}
