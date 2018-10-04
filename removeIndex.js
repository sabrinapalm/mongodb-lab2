// Skapa JavaScript-filer för att ta bort index från databasen.
const MongoClient = require('mongodb').MongoClient;
const options = { useNewUrlParser: true };

// Default URL for connecting to database
const url = 'mongodb://127.0.0.1:27017';
const dbName = 'flowers';  // Database Name

// Use connect method to connect to the server
MongoClient.connect(url, options, (err, client) => {
  if(err){
    console.log('Error, unable to connect!', err);
    return;
  } // if unable to connect
  const db = client.db(dbName);  // ansluten
  const index =  { name: 1 , price: -1 }; //skapa index

  db.collection(dbName).dropIndex(index, (err, result) =>{
    if (err) {
      console.log('Error, unable to remove index!', err.errmsg);
      client.close();
      return;
    }
    console.log('Success, removed index:', result);
    client.close();
  })
})
