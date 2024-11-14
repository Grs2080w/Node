// Atualizadno clientes mysql (updtate)

(async () => {
    const db = require('../db')

    console.log('__________________________')
    console.log('')
    console.log('')
    await db.atualizaCliente(25, {nome:'Leticia', idade:16})
    console.log('Cliente Atualizado com Sucesso.')
    console.log('__________________________')
    console.log('')
    console.log('Obtendo todos os clientes...')
    console.log('__________________________')
    console.log('')

    var clientes = await db.todosClientes()
    return clientes
})()
.then(clientes => {
    const server = require("../server")
    server.serverOnAirWR('/', 3653, clientes)
})
