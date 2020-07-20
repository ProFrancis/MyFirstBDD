const fs = require('fs').promises

// API FILE
const URL_PATH_FILE = "./api/country_names.json"

readFileApi = async() => {
  try{
    const contentFile = await fs.readFile(URL_PATH_FILE, "utf-8")
    return contentFile
  } catch (err){
    console.error("CONNOT READ FILE ", err)
  }
}

exports.readFileApi = readFileApi