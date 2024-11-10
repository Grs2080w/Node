const http = require('http')
const fs = require('fs') // File System / Manipulador de Aquivos
const porta = 3000

const server = http.createServer((req, res) => {
    fs.appendFile('text.txt','Curso de Node - Cfb Curso', (err, arquivo) => {
        if(err)throw err // Mostra se tiver algum erro.
        console.log('Arquivo criado')})

        res.end()

})

server.listen(porta, ()=>{console.log("Server Connected in Port 3000")})



// AppendFile anexa a mensagem no arquivo especificado no parâmetro seguinte, e se ele não existir, cria o arquivo.