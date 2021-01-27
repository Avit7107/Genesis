const mongoose = require("mongoose");
const url = "mongodb+srv://avitalm:avitalm@cluster1.kgf5g.mongodb.net/Genesis2?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    mongoose.connect(`${url}`, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`mongoDB connected `);
  } catch (error) {
    console.error(`error : ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;


// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://avital:avital@cluster0.zx6rq.mongodb.net/Genesis?retryWrites=true&w=majority";
// const connectDB = new MongoClient(uri, { useNewUrlParser: true });
// connectDB.connect(err => {
//   const collection = connectDB.db("test").collection("devices");
//   // perform actions on the collection object
//   connectDB.close();
// })
// module.exports = connectDB;