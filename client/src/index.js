import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import './styles.scss';
import App from './App.js';
//import coffeeData from '../../models/index.js'


// var coffeeData = [
//   {
//     roaster: 'Verve',
//     roasterLocation: 'Santa Cruz, CA',
//     name: 'Jose Guzman',
//     process: 'washed',
//   },
//   {
//     roaster: 'Passenger',
//     roasterLocation: 'Lancaster, PA',
//     name: 'Gesha Village',
//     process: 'natural',
//   },
//   {
//     roaster: 'Cadenza',
//     roasterLocation: 'Houston, TX',
//     name: 'Colombia Huila',
//     process: 'honey',
//   }
// ];

console.log('before ajax');

$.ajax({
  url: 'http://localhost:7100/coffees',
  type: 'GET',
  success: function(err, data) {
    console.log('success: ', data);
  },
  error: function (error) {
    console.error('Failed to get data', error);
  }
});



ReactDOM.render(<App />, document.getElementById("app"));

// ReactDOM.render(<App coffees={coffeeData} />, document.getElementById("app"));