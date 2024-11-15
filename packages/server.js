const serverOnAir = (port, send) =>{
    const express = require('express')
    const app = express()
    app.get('/', (req, res)=>{
        res.send(send)
    }).listen(port, ()=>{console.log(`Server conected on PORT ${port}`)})
}

const serverOnAirWR = (root, port, send) =>{
    const express = require('express')
    const app = express()
    app.get(`${root}`, (req, res)=>{
        res.send(send)
    }).listen(port, ()=>{console.log(`Server conected on PORT ${port}`)})
}


module.exports = {serverOnAir, serverOnAirWR}
