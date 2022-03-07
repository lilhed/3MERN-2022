const fs = require('fs')
file = fs.readFileSync('/Users/redasarmi/Sites/final project/3MERN-2022/user.txt')
file = file.toString()
console.log(file.split('\n').length - 1)

