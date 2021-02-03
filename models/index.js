// Model file queries the database and returns results

const db = require('../db');


module.exports = {

  coffees: {
    get: function(callback) {

      console.log('Inside models');



    //   db.coffeeCollection.find({}, function(err, results) {
    //     if (err) throw err;
    //     console.log('Model function called');
    //     console.log(results);
    //     db.close();
    //   })
    }

  }


}

// var coffeeData = [
//   {
//     roaster: 'Verve',
//     roasterLocation: 'Santa Cruz, CA',
//     coffeeName: 'Jose Guzman',
//     process: 'washed',
//   },
//   {
//     roaster: 'Passenger',
//     roasterLocation: 'Lancaster, PA',
//     coffeeName: 'Gesha Village',
//     process: 'natural',
//   },
//   {
//     roaster: 'Cadenza',
//     roasterLocation: 'Houston, TX',
//     coffeeName: 'Colombia Huila',
//     process: 'honey',
//   }
// ];

// export default coffeeData;


