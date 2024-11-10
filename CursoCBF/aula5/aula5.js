const http = require('http')
const fs = require('fs') // File System
const porta = 3000

const server = http.createServer((req, res) => {
    fs.readFile('index.html', (err, arquivo) => {
        if (err) {
            console.log("Erro ao ler arquivo", err)
        }
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write(arquivo)
        res.end()
    })

})

server.listen(porta, ()=>{console.log("Server Connected in Port 3000")})