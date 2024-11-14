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
    const [linhas] = await con.query('SELECT * FROM curso_node')
    return await linhas
}

const insereCliente = async(nameColumns, values) => {
    const con = await conectar()
    const sql = `INSERT INTO curso_node (?) VALUES (?,?)`
    valores = [nameColumns, values.nome, values.idade]
    await con.query(sql, valores)
}

const atualizaCliente = async(id, cliente) => {
    const con = await conectar()
    const sql = 'UPDATE curso_node SET nome=?, idade=? WHERE  id=?'
    valores = [cliente.nome, cliente.idade, id]
    await con.query(sql, valores)
}

const deletaCliente = async(id) => {
    const con = await conectar()
    const sql = 'DELETE FROM curso_node WHERE id=?'
    valores = [id]
    await con.query(sql, valores)
}



conectar()
module.exports = {todosClientes, insereCliente, atualizaCliente, deletaCliente}