const express = require('express');
const app = express();
const port = 7100;

const bodyParser = require('body-parser');

const path = require('path');
const fs = require('fs');

const multer = require('multer');

let coffeeData = require('./coffeeData.js');

// Database
const MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost:27017/cc", function (err, db) {

  if (err) throw err;
  console.log('Connected to your database!');

});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './client/build')));




app.get('/coffees', (req, res) => {

  res.header('Access-Control-Allow-Origin', '*');
  res.send(coffeeData);
});

app.post('/add', (req, res) => {
  res.header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE');
  coffeeData.push(req.body);
  console.log('coffee data on server: ', coffeeData );
  res.status(200);
});


app.listen(port, () => {
  console.log(`Coffee Crossing Server listening at http://localhost:${port}`);
});

// MongoClient.connect("mongodb://localhost:27017/cc", function (err, db) {

  //   if (err) throw err;
  //   var dbo = db.db("cc");
  //   dbo.collection("coffeeCollection").find().toArray(function (err, result) {
  //     if (err) throw err;

  //     console.log('result MODEL GET REQUEST: ', result);

  //   });

  //   res.send(result);
  //res.sendFile(path.join(__dirname, './client/build/index.html'));