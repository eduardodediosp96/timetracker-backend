const mongoose = require('mongoose')

const URI = "mongodb+srv://root:root@cluster0.79uzw.mongodb.net/time_tracker?retryWrites=true&w=majority";

const connectDB = async() => {
    await mongoose.connect(URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log('db connected..!');
};

module.exports = connectDB;



// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://root:root@cluster0.79uzw.mongodb.net/time_tracker?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// console.log('db connected..!');
// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     client.close();
// });

// module.exports = client;