const MongoClient = require('mongodb').MongoClient;
const options = { useNewUrlParser: true };
const { getAllProducts } = require('./flowers');

// Default URL for connecting to database
const url = 'mongodb://127.0.0.1:27017';
const dbName = 'flowers';  // Database Name

// Use connect method to connect to the server
MongoClient.connect(url, options, (err, client) => {
	if( err ) {
    console.log('Error, unable to connect', err);
    return;
  };  // if unable to connect
  const db = client.db(dbName);  // ansluten
  const collection = db.collection('flowers');
  let data = getAllProducts();
  collection.insertMany(data, (err, result) => {
		if( err ) {
      console.log('Error, unable to add to collection', err);
      client.close();
    }
    console.log('Success, added products to database!');
		client.close();  // remember to close connections when done
	});
});
