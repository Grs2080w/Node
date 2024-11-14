const express = require("express")
const app = express()

const formidable = require("formidable")
const fs = require("fs")

app.post('/envioDeArquivo', (req, res) =>{

    console.log('Chegou aqui')

        const form = new formidable.IncomingForm()

        form.parse(req, (erro, campos, arquivos) => {

            if (erro) throw erro

            const urlantiga = arquivos.filetoupload[0].filepath
            const urlnova = 'C:/Users/Gabriel Santos/OneDrive/Desktop/' + arquivos.filetoupload[0].originalFilename
            fs.rename(urlantiga, urlnova, (err) => {
                if (err) {res.status(400).send('Algo deu errado no envio de arquivos!')}

                fs.readFile('sucess.html', (err, arq) =>{
                    if (err) throw err
                    res.header({'Content-Type':'text/html'})
                    res.send(arq)
                })
            })
        })
})

app.get('/', (req, res)=>{

        fs.readFile('index.html', (err, arq)=>{
            if (err) {res.status(400), console.log('Houve um Erro!')}
            res.header({'Content-Type':'text/html'})
            res.send(arq)
        })  

    
})

app.listen(3000, ()=>{console.log('Server Conected on Port 3000')})