const MongoClient = require('mongodb').MongoClient;
const options = { useNewUrlParser: true };
const { getAllProducts } = require('./flowers');

// Default URL for connecting to database
const url = 'mongodb://127.0.0.1:27017';
const dbName = 'flowers';  // Database Name

// Use connect method to connect to the server
MongoClient.connect(url, options, (err, client) => {
	// if unable to connect
	if(err) {
    console.log('Error, unable to connect', err);
    return;
  };
  const db = client.db(dbName);  // ansluten
  const collection = db.collection('flowers');
  let data = getAllProducts();
  collection.deleteMany({}, (err, result) => {
		if(err) {
      console.log('Error, unable to remove from collection', err);
      client.close();
    }
    console.log('Success, deleted products from database!');
		client.close();  // remember to close connections when done
	});
});
