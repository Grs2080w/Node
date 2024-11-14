// Usando o express

const express = require('express')
const app = express()
const porta = process.env.PORT // Caso não souber qual porta está rodando o servidor
const fs = require('fs')


app.get('/teste', (req, res)=>{
    fs.readFile('erro.html', (err, arq)=>{
        res.set({'Content-Type':'*/*'}) // Seta o header
        res.status(404).send(arq) // Envia uma mensagem de erro personalizada
    })
    
})

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

app.listen(3000, ()=>{console.log('Server Connected')}) 