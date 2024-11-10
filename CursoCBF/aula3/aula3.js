const http = require('http')

const porta = 3000
const host = '127.0.0.1'

const server = http.createServer((request, response)=>{
    response.writeHead(200, {
        'Conetent-Type':'text/html'
    })

    if(request.url == '/'){
        response.write('<h1>Seja Bem Vindo</h1>')
    } else if(request.url == '/canal') {
        response.write('<h1>Pagina canal</h1>')
    } else if(request.url = '/curso/node') {
        response.write('<h1>Curso de Node</h1>')
    }

    response.end
})

server.listen(porta, host, ()=>{
    console.log('Server Connected')
})