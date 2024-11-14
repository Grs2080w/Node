const conectar = async ()=> {
    if (global.conexão && global.conexão.state != 'disconected') {
        return global.conexão
    }
    
    const mysql = require("mysql2/promise.js")
    const con = mysql.createConnection('mysql://root:@localhost:3306/cadastro')

    console.log('Banco de Dados Conectado')

    global.conexão = con
    return con
}

const todosClientes = async() => {
    const con = await conectar()
    const [linhas] = await con.query('SELECT * FROM gafanhotos')
    return await linhas
}

conectar()
module.exports = {todosClientes}