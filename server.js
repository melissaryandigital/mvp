const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');

const path = require('path');
const fs = require('fs');

const multer = require('multer');

const MongoClient = require('mongodb').MongoClient;
const db = require('./db');

const Coffee = require('./client/coffee');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static('client'));




app.listen(port, () => {
  console.log(`Coffee Crossing listening at http://localhost:${port}`);
});


//


//


// Get request to index queries database
app.get('/', (req, res) => {

  Coffee.readAll((err, coffees) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.status(200).json(coffees);
    }
  })


  //db.coffees.find()

});