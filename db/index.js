var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/cc", function (err, db) {

    if (err) throw err;
    console.log('Connected to your database!');
    var dbo = db.db("cc");
    dbo.collection("coffeeCollection").find().toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    })



});