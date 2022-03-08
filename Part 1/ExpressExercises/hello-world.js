const express = require('express')
const app = express()
const port = process.argv[2]

app.get('/', (req, res) => {
    res.send("hello World !")
})

app.listen(port, () => {
    console.log(port)
})
