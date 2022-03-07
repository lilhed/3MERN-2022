const fs = require('fs');

function ReadDir(dirPath){
	return new Promise((resolve, reject) => {
		fs.readdir(dirPath, {}, (err, files) => {
			if (err) return reject(new Error(`${dirPath} is not a directory`))
			return resolve(files);
		})
	})
}

ReadDir(process.argv[2]).then((files) => {
	files.forEach(element => {
		if(process.argv[3]){
			if (element.includes(process.argv[3])){
				console.log(element);
			}
		} else {
			console.log(element);
		}
		
	});
}, (err) => {
	console.log(err.message);
})