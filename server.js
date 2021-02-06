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

let coffeeData = require('./coffeeData.js');


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log('connected!');
});

// const kittySchema = new mongoose.Schema({
//   name: String
// });

// kittySchema.methods.speak = function() {
//   const greeting = this.name
//   ? "Meow name is " + this.name
//   : "I don't have a name";
//   console.log(greeting);
// }

// const Kitten = mongoose.model('Kitten', kittySchema);

// const silence = new Kitten({name:'Silence'});
// console.log(silence.name);

// const fluffy = new Kitten({ name: 'fluffy'});
// fluffy.speak();

// fluffy.save(function(err, fluffy) {
//   if (err) return console.error(err);
//   fluffy.speak();
// });

// var find = Kitten.find(function(err, kittens) {
//   if (err) return console.error(err);
//   console.log(kittens);
// });

// Kitten.find({name:/^fluff/}, find);

/*  Coffee Mongoose Setup */

const coffeeSchema = new mongoose.Schema({
  roaster: String,
  roasterLocation: String,
  coffeeName: String,
  process: String
});

const Coffee = mongoose.model('Coffee', coffeeSchema);



// Coffee.deleteMany({ roaster: 'Xela' }, function (err) {
//   if(err) console.log(err);
//   console.log("Successful deletion");
// });



const xela = new Coffee({
  roaster: 'Xela',
  roasterLocation: 'Houston',
  coffeeName: 'Honduras',
  process: 'natural'
});


xela.save(function (err, xela) {
  if (err) return console.error(err);
})






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
  coffeeData.push(req.body);
  //console.log('coffee data on server: ', coffeeData );
  res.status(200);
});

app.listen(port, () => {
  console.log(`Coffee Crossing Server listening at http://localhost:${port}`);
});