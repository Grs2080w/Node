var express = require("express")
var app = express()
var fs = require('fs')
var r = 0

app.get('/', (req, res) => {
    fs.readFile('index.html', (err, arq) => {
        res.end(arq)
    })
})


app.post('/um', (req, res) => {
    if (req) {
        r += 1
        console.log('+ 1 Conexão Feita ' + `/ ${r} conexões no total`)

    }

    console.log(req)
    res.send('oi')

})


app.listen(8000, ()=>{console.log('Server Conected on Port 8000')})