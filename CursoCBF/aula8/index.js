// Selecionando todos os dados da tabela (select)

(async () => {
    const db = require('./db')
    console.log('Obter todos os clientes')
    var clientes = await db.todosClientes()
    return clientes
})()
.then(clientes => {
    console.log(clientes)
})
