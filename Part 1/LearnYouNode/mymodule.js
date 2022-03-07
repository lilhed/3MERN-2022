const fs = require('fs');

module.exports = function(dirPath, extension, callback){
	return new Promise((resolve, reject) => {
		fs.readdir(dirPath, {}, (err, files) => {
			if (err) return reject(new Error(`${dirPath} is not a directory`));
			return resolve(files);
		})
	}).then((files) => {
		files.forEach(element => {
			if(extension){
				if (element.includes(`.${extension}`)){
					console.log(element);
				}
			} else {
				console.log(element);
			}
		})
	}, (err) => {
		console.log(err.message);
	})
}