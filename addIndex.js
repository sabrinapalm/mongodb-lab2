// Skapa JavaScript-filer för att lägga till index i databasen.
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

  db.collection(dbName).createIndex(index, (err, result) =>{
    if (err) {
      console.log('Error, unable to create index!', err);
      client.close();
      return;
    }
    console.log('Success, created index:', result);
    client.close();
  })
})
