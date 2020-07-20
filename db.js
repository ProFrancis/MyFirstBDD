const mongodb = require('mongodb')

var client; 
const MongoClient = mongodb.MongoClient
const MONGO_DBNAME = "country"
const MONGO_URL =  "mongodb://localhost:27017"

connectDB = async() => {
  try{
    if(!client) client = await MongoClient.connect(MONGO_URL, { useUnifiedTopology: true })
    return {
      db: client.db(MONGO_DBNAME),
      client: client
    }
  }catch (err){
    console.error("ERROR =>", err)
  }
}

close = () => {
  if(client) client.close()
  client = undefined
}

exports.connectDB = connectDB
exports.close = close