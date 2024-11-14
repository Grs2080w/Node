const express = require("express")
const app = express()

const event = require("events")
const EventEmitter = new event.EventEmitter

const final = ()=>{console.log('Fim do Processo')}

EventEmitter.on('msg', ()=>{console.log('Curso de Node')})
EventEmitter.on('fim', final)

app.get('/', (req, res)=>{
    EventEmitter.emit('msg')
    res.status(200).send('oi')
    EventEmitter.emit('fim')
})

app.listen(3000, ()=>{console.log('Server conected on port 3000')})
