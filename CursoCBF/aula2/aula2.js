const http = require('http')

const server = http.createServer((request, response)=>{

    response.writeHead(200, {
        'Content-Type':'text/plain'
    })

    response.write('Aprendendo Node.js\n')
    response.end()

})

server.listen(5665, ()=>{console.log('Server Conected')})