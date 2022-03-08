const mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017', (err, client) => {
	if (err) throw err;
	const database = client.db(process.argv[2]);
	const collection = database.collection(process.argv[3]);
	collection.deleteOne({
		_id: process.argv[4]
	}).then(() => {
		client.close();
	})
});