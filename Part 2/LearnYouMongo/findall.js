const mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017', (err, client) => {
	if (err) throw err;
	const database = client.db('learnyoumongo');
	const collection = database.collection('parrots');
	collection.find({
		age: {$gt: parseInt(process.argv[2])}
	},{
		name: 1,
		age: 1,
		_id: 0
	}).toArray().then(document => {
		console.log(`[ { name: '${document[0].name}', age: ${document[0].age} } ]`);
		client.close();
	})
});