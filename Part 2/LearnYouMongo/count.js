const mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017', (err, client) => {
	if (err) throw err;
	const database = client.db('learnyoumongo');
	const collection = database.collection('parrots');
	collection.count({
		age: {$gt: parseInt(process.argv[2])}
	}).then(count => {
		console.log(count);
		client.close();
	})
});