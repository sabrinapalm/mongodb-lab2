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
	const number = 8;
	let filter = {};  // all documents
	collection.find(filter).limit(number).toArray(function(err, data) {
		if( err ) {
			console.log('Error, unable to find in collection', err);
			client.close();
		}
		console.log(`Success, found the ${number} first flowers in database!`);
		console.log(data)
		client.close();  // remember to close connections when done
	});
});
