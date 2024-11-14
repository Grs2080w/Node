// Adicionando clientes (Insert into)

(async () => {
    const db = require('../db')

    console.log('__________________________')
    console.log('')
    console.log('Adicionando novo cliente...')
    await db.insereCliente('nome, idade', {nome:'nome', idade:'idade'})
    console.log('Cliente Adicionado com Sucesso.')
    console.log('__________________________')
    console.log('')
    console.log('Obter todos os clientes')
    console.log('__________________________')
    console.log('')

    var clientes = await db.todosClientes()
    return clientes
})()
.then(clientes => {
    const server = require("../server")
    server.serverOnAirWR('/', 3653, clientes)
})
