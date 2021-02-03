var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/cc", function (err, db) {

     if(err) throw err;
     console.log('Yo connecting your database!');
     db.close();

     //Write databse Insert/Update/Query code here..
    //db.cc.find({});




});