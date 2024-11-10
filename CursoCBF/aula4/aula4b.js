// Usando o express

const express = require('express')
const app = express()
const porta = process.env.PORT // Caso não souber qual porta está rodando o servidor

app.get('/', (req, res)=>{
    res.send('Seja Bem vindo')
})

app.get('/canal', (req, res)=>{
    res.json({
        canal:'cfb cursos',
        curso:'node.js',
        nome: 'Gabriel',
        idade:16
    })
})

app.listen(porta || 3000, ()=>{console.log('Server Connected')}) 