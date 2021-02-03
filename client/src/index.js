import React from 'react';
import ReactDOM from 'react-dom';
import Img from './sunrise.jpg';
import './styles.scss';
import App from './App.js';
import coffeeData from '../../models/index.js'

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


ReactDOM.render(<App coffees={coffeeData} />, document.getElementById("app"));