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
    roaster: 'Verve',
    roasterLocation: 'Santa Cruz, CA',
    name: 'Jose Guzman',
    process: 'washed',
  },
  {
    roaster: 'Passenger',
    roasterLocation: 'Lancaster, PA',
    name: 'Gesha Village',
    process: 'natural',
  },
  {
    roaster: 'Cadenza',
    roasterLocation: 'Houston, TX',
    name: 'Colombia Huila',
    process: 'honey',
  }
];


app.get('/coffees', (req, res) => {

  console.log(coffeeData);
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