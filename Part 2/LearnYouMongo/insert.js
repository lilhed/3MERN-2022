const mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017', (err, client) => {
	if (err) throw err;
	const database = client.db('learnyoumongo');
	const collection = database.collection('docs');
	collection.insertOne({
		firstName: process.argv[2],
		lastName: process.argv[3]
	}).then(document => {
		console.log(
			JSON.stringify({
				firstName: process.argv[2],
				lastName: process.argv[3]
			})
		);
		client.close();
	})
});