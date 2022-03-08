const mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017', (err, client) => {
	if (err) throw err;
	const database = client.db('learnyoumongo');
	const collection = database.collection('prices');
	collection.aggregate([
    { $match: { size: process.argv[2] } },
    { $group: { _id: 'average', average: { $avg: '$price' } } }
  ]).toArray().then(document => {
		console.log(parseInt(document[0].average).toFixed(2));
		client.close();
	})
});