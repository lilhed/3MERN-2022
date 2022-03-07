const fs = require('fs');

const filebuffer = fs.readFileSync(process.argv[2]);
const file = filebuffer.toString();
console.log(file.split('\n').length);