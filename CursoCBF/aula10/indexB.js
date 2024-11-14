// Deletando dados mysql

(async () => {
    const db = require('../db')

    console.log('__________________________')
    console.log('')
    console.log('')
    await db.deletaCliente(24)
    console.log('Cliente Deletado com Sucesso.')
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
