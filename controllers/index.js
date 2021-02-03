// Call the fudel functions
var models = require('../models');

module.exports = {

  coffees: {
    get: function (req, res) {
      models.coffees.get(function (err, results) {
        if (err) {
          throw err;
        }
        console.log('Controller');
        console.log('controllers results: ', results);
        res.json(results);
      })
    }
  }

}