import React, { Component } from 'react';
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
          text: "example chart"
        },
        xAxis: {
          type: 'datetime'
        },
        series: [{
            data: [1,2,3,5,6,3,4,21,2],
            pointStart: Date.UTC(2017, 1, 1),
            pointInterval: 3600 * 1000 * 24 //update per day
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

        dataCollection.forEach((val, index, collection) =>{
          filter.push(val.cumulative_conversion_rate);
        })

        let newSeries = [Object.assign({}, this.state.config.series[0], {data : filter})];
        console.log('newSeries: ', newSeries);

        console.log("this.state spread: ", this.state)

        this.setState(...this.state,  newSeries);

        setTimeout(console.log('this.state.config after set state: ', this.state.config), 5000);
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



// function isObject(item) {
//     return (item && typeof item === 'object' && !Array.isArray(item) && item !== null);
// }
//
// function mergeDeep(target, source) {
//   let output = Object.assign({}, target);
//   if (isObject(target) && isObject(source)) {
//     Object.keys(source).forEach(key => {
//       if (isObject(source[key])) {
//         if (!(key in target))
//           Object.assign(output, { [key]: source[key] });
//         else
//           output[key] = mergeDeep(target[key], source[key]);
//       } else {
//         Object.assign(output, { [key]: source[key] });
//       }
//     });
//   }
//   return output;
// }
//
// let merged = mergeDeep(this.state.config.series[0], {data:filter});
// console.log('merged', merged)
//
// let test = {
//   a: 1,
//   b: 2,
//   c: 3
// }
// let together = {d:4, ...test}
// console.log('together', together)
