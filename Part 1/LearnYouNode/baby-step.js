const [command, path, ...args] = process.argv;
const sum = args.reduce((prev,curr) => Number(prev) + Number(curr), 0);
console.log(sum);