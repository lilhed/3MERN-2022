const mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017', (err, client) => {
	if (err) throw err;
	const database = client.db(process.argv[2]);
	const collection = database.collection('users');
	collection.updateOne({
		username: 'tinatime'
	}, {
		$set: {
			age: 40
		}
	}).then(() => {
		client.close();
	})
});