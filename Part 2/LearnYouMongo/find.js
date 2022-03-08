const mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017', (err, client) => {
	if (err) throw err;
	const database = client.db('learnyoumongo');
	const collection = database.collection('parrots');
	collection.find({
		age: {$gt: parseInt(process.argv[2])}
	}).toArray().then(document => {
		console.log(`[ { _id: ${document[0]._id}, name: '${document[0].name}', age: ${document[0].age} } ]`);
		client.close();
	})
});