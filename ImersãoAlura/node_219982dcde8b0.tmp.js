import express from 'express'
const app = express();


const json = {
    "nome":"Gabriel",
    "idade":16,
    "sexo":"Masculino",
    "estadoCivil":"Casado",
    "nomeMae":"Maria de Fátima Oliveira Rodrigues",
    "nomePai":"Sergio Roberto Rodrigues Santos",
    /*"adress": {

        "rua":"rua 17",
        "quadra":3,
        "lote":4,
        "setor":"Aeroporto"
    }*/
}

if (json.adress) {
    var {adress} = json
} else {
    var adress = {"status":"Não Informado"}
}

// Desestruturação


app.get('/api', (req, res) =>{
    res.status(200).send(adress)
})

app.listen(3000, ()=>{console.log('Server Conected on Port 3000');});