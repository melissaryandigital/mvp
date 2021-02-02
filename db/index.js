var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/cc", function (err, db) {

     if(err) throw err;

     //Write databse Insert/Update/Query code here..
    //db.cc.find({});




});