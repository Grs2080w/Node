const express = require('express')
const rotas = require('./rotas/rotas')

const app = express()

app.use('/', rotas)

app.listen(3000, ()=>{console.log('Server listeninsg on PORT 3000')})