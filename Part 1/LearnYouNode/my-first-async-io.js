const fs = require('fs');

function ReadFile(file) {
	return new Promise((resolve, reject) => {
		fs.readFile(file, {}, (err, data) => {
			if (err) return reject(new Error(`${file} not found`));
			return resolve(data.toString());
		})
	}) 
}

ReadFile(process.argv[2]).then((result) => {
	console.log(result.split('\n').length -1);
}, (err) => {
	console.log(err.message);
});