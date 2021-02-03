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

//const coffeeData = require('./models/index.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, './client/build')));


Todo.readAll: function(callback) {
  return $.ajax({
    url: this.url,
    type: 'GET',
    dataType: 'json',
    success: callback
  });
}




app.get('/', (req, res) => {

  Todo.readAll((err, todos) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.status(200).json(todos);
    }
  });

  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.post('/'), (req, res) => {

}

app.listen(port, () => {
  console.log(`Coffee Crossing Server listening at http://localhost:${port}`);
});