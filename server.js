const express = require('express');
const app = express();
const port = 7100;

const bodyParser = require('body-parser');

const path = require('path');
const fs = require('fs');

const multer = require('multer');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './client/build')));

// Non-persistant datastore
//let coffeeData = require('./coffeeData.js');


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log('connected!');
});

/*  Coffee Mongoose Setup */
const coffeeSchema = new mongoose.Schema({
  roaster: String,
  roasterLocation: String,
  coffeeName: String,
  region: String,
  process: String,
  notes: String,
});


const Coffee = mongoose.model('Coffee', coffeeSchema);

// Coffee.remove({}, function(err) {
//   console.log('collection removed');
// })

// Coffee.deleteMany({ roaster: 'Xela' }, function (err) {
//   if(err) console.log(err);
//   console.log("Successful deletion");
// });


// const passenger = new Coffee({
//   roaster: 'Passenger',
//   roasterLocation: 'Lancaster, PA',
//   coffeeName: 'El Guayabal Gesha',
//   region: 'Mexico',
//   process: 'Washed',
//   notes: 'Orchid, Dried Mango, Pomelo'
// });


// passenger.save(function (err, xela) {
//   if (err) return console.error(err);
// });


// const cadenza = new Coffee({
//   roaster: 'Cadenza Coffee Co.',
//   roasterLocation: 'Houston, TX',
//   coffeeName: 'Colombia Huila',
//   region: 'Colombia',
//   process: '',
//   notes: 'Sweet, Nutty, Dark Chocolate'
// });


// cadenza.save(function (err, xela) {
//   if (err) return console.error(err);
// });

app.get('/coffees', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');

  Coffee.find(function(err, coffees) {
    if (err) return console.log(err);

    res.send(coffees);
  });

  //res.send(coffeeData);
});

app.post('/add', (req, res) => {
  res.header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE');

  let addedCoffee = req.body.roaster;

  addedCoffee = new Coffee(req.body);

  addedCoffee.save(function (err, addedCoffee) {
    if (err) return console.log(err);

    console.log('added coffee saved: ', addedCoffee);
  });

  res.send(req.body);

  //coffeeData.push(req.body);
  //console.log('coffee data on server: ', coffeeData );
  res.status(200);
});

app.listen(port, () => {
  console.log(`Coffee Crossing Server listening at http://localhost:${port}`);
});