import express from 'express'
const app = express();

app.use(express.json());

//Mock
const posts = [
    {
      id: 1,
      descricao: 'Uma foto de um gato',
      imagem: "https://placecats.com/200/300"
    },
    {
      id: 2,
      descricao: 'Uma paisagem bonita',
      imagem: "https://picsum.photos/id/237/200/300"
    },
    {
      id: 3,
      descricao: 'Um prato delicioso',
      imagem: "https://picsum.photos/id/237/200/300"
    },
    {
      id: 4,
      descricao: 'Uma cidade vibrante',
      imagem: "https://picsum.photos/id/237/200/300"
    },
    {
      id: 5,
      descricao: 'Um carro esportivo',
      imagem: "https://picsum.photos/id.237/200/300"
    },
    {
        id:5000,
        descricao:"Este post não existe."
    }
  ];


app.get('/posts', (req, res) =>{
    res.status(200).json(posts)
})

// Busca dentro do array qual objeto possui o mesmo id do requisitado e retorna esse id.
function buscaPost(id){
    return posts.findIndex((post)=>{
        return post.id === Number(id)
    })
}

app.get("/posts/:id", (req,res)=>{

    let id_post = req.params.id // Paramentro da requisição
    const index = buscaPost(id_post) // Busca id_post no array
    res.status(200).json(posts[index])
    
})

app.listen(3000, ()=>{console.log('Server Conected on Port 3000');});