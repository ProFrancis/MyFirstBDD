const DB = require('./db.js')
const file = require('./fs.js')

createCollection = async () => {
  try{
    const { db } = await DB.connectDB()
    const collection = await db.collection('country_names_step2')
    checkAndInsert(db,collection)
  }catch (err){
    console.error(err)
  }
 }

insert = async (collection) => {
  try{
    const api = await file.readFileApi()
    const object = await JSON.parse(api)
    const result = object.map(nameCountry => {
      collection.insertOne({
        name: nameCountry
      })
    })
    return result
  }catch (err){
    console.error(err)
  }
}

checkAndInsert = async (db , collection) => {
  try{
    const result = await db.listCollections().toArray()
    for(let i = 0; i < result.length; i++){
      if(result)
        if(result[i].name !== "country_names_step2") insert(collection)
        break;
    }
  }catch (err){
    console.error(err)
  }
}

createCollection()