const express = require('express')
const rotas = express.Router()

let cursosInfo = [
    {"curso":'node','info':'Curso de Node'},
    {"curso":'java','info':'Curso de Java'},
    {"curso":'arduino','info':'Curso de Arduino'}
]

console.log(cursosInfo)
console.log(cursosInfo[0].curso)

rotas.get('/', (req, res)=>{
    res.json({msg:'Seja bem vindo'})
}) 

rotas.get('/:cursoid', (req, res)=>{
    const curso = req.params.cursoid
    const cursoI = cursosInfo.find(i => i.curso == curso)

    if(!cursoI){
        res.status(404).send('Curso não encontrado :(')
    } else {
        res.status(200).json(cursoI)
    }
}) 

module.exports = rotas