const { MongoClient } = require('mongodb')

MongoClient.connect(
    'mongodb://localhost:27017',
    function(err, client) {
    if (err) throw err
    console.log(client)
    const database = client.db("leanryoumongo")
    const collection = database.collection("parrots")
    const age = process.argv[2];

    collection
        .find({
            age: {
                $gt: +age
            }
        })
        .toArray(function (err, docs) {
            if (err) throw err
            console.log(docs)
            client.close()
    })
}
)
