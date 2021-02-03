const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');

const path = require('path');
const fs = require('fs');

const multer = require('multer');

// Database
//const MongoClient = require('mongodb').MongoClient;
const db = require('./db');

const controller = require('./controllers');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, './client/build')));



app.get('/coffees', (req, res) => {

  controller.coffees.get();
  res.sendStatus(200);

  console.log('Inside server get request');

  //res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.post('/'), (req, res) => {

}



app.listen(port, () => {
  console.log(`Coffee Crossing Server listening at http://localhost:${port}`);
});