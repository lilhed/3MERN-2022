const express = require('express');
const fs = require('fs');

const app = express();

app.get('/books', (req, res) => {
	fs.readFile(process.argv[3], (err, data) => {
		if (err) return res.sendStatus(500);
		try{
			const result = JSON.parse(data);
			res.json(result);
		} catch(error) {
			res.sendStatus(500);
		}
	});
});

app.listen(process.argv[2]);