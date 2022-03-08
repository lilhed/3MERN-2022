const express = require('express');

const app = express();

app.get('/search', (req, res)=> {
	const object = req.query;
	res.send(object);
});

app.listen(process.argv[2]);