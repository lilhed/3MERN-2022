let sum = 0
console.log(process.argv)
for (let i = 2; i < 5; i++ )
    sum += Number(process.argv[i])
console.log(sum)
