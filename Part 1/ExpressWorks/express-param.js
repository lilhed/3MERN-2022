const express = require('express');

const app = express();

app.put('/message/:id', (req, res) => {
	let result = require('crypto')
		.createHash('sha1')
		.update(new Date().toDateString() + req.params.id)
		.digest('hex');
	res.send(result);
})

app.listen(process.argv[2]);