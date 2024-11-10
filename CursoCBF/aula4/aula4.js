const http = require('http')
const porta = process.env.PORT // Caso não souber qual porta está rodando o servidor

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type':'text/plaine'})
    res.end("Cfb Cursos")
})

server.listen(porta || 3000, ()=>{
    console.log('Server Connected')
})