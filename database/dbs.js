const { MongoClient } = require("mongodb");

const username = encodeURIComponent("ashishyter");
const password = encodeURIComponent("Ashish@2615");

const MONGO_URI = "mongodb+srv://ashishyter:Ashish%402615@cluster0.yo1zukm.mongodb.net/?retryWrites=true&w=majority";

let client = new MongoClient(process.env.MONGO_URI);

async function dbConnect(){
   let result =  await client.connect();

  return result.db("ashish").collection("crud");
}

module.exports = dbConnect;