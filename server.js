const express = require('express');
const app = express();
const port = 7100;

const bodyParser = require('body-parser');

const path = require('path');
const fs = require('fs');

const multer = require('multer');

// Database
const MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost:27017/cc", function (err, db) {

  if (err) throw err;
  console.log('Connected to your database!');

});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './client/build')));


var coffeeData = [
  {
    id: 1,
    roaster: 'Verve',
    roasterLocation: 'Santa Cruz, CA',
    coffeeName: 'Jose Guzman',
    process: 'washed',
  },
  {
    id: 2,
    roaster: 'Passenger',
    roasterLocation: 'Lancaster, PA',
    coffeeName: 'Gesha Village',
    process: 'natural',
  },
  {
    id: 3,
    roaster: 'Cadenza',
    roasterLocation: 'Houston, TX',
    coffeeName: 'Colombia Huila',
    process: 'honey',
  }
];


app.get('/coffees', (req, res) => {

  res.header('Access-Control-Allow-Origin', '*');
  console.log(coffeeData);
  // JSON.stringify(coffeeData);
  res.send(coffeeData);

  // MongoClient.connect("mongodb://localhost:27017/cc", function (err, db) {

  //   if (err) throw err;
  //   var dbo = db.db("cc");
  //   dbo.collection("coffeeCollection").find().toArray(function (err, result) {
  //     if (err) throw err;

  //     console.log('result MODEL GET REQUEST: ', result);

  //   });

  //   res.send(result);
  //res.sendFile(path.join(__dirname, './client/build/index.html'));

});


app.post('/'), (req, res) => {

}


app.listen(port, () => {
  console.log(`Coffee Crossing Server listening at http://localhost:${port}`);
});