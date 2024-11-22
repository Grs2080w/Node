import {getPosts, criarPost} from "../models/postModel.js";
import fs from "fs"

export  async function listarPosts (req, res) {
    // Chama a função getPosts() para obter os posts do banco de dados.
    const posts = await getPosts();
    // Envia os posts como resposta em formato JSON com status 200 (sucesso).
    res.status(200).json(posts)}

    //Envia tds os posts

// Função assíncrona para criar um novo post
export async function postarNovoPost(req, res) {
   // Extrai os dados do corpo da requisição para criar um novo post
   const novoPost = req.body; 
 
   // Bloco try...catch para tratar possíveis erros
   try {
     // Chama a função criarPost (não definida aqui) para criar o post no banco de dados
     const postCriado = await criarPost(novoPost);
 
     // Envia uma resposta HTTP com status 200 (OK) e o post criado como corpo
     res.status(200).send(postCriado);
   } catch (err) {
     // Registra a mensagem de erro no console para depuração
     console.error(err.message);
 
     // Envia uma resposta HTTP com status 500 (Erro interno do servidor) e uma mensagem de erro genérica
     res.status(500).send({"erro":"Houve erro na requisição :("})
   }
 }
 
 // Função assíncrona para criar um novo post com uma imagem e salvar a imagem no servidor
 export async function uploadImagem(req, res) {
   // Cria um objeto com os dados básicos do novo post, incluindo o nome original da imagem
   const novoPost = {
     descricão: "",
     imgUrl: req.file.originalname,
     alt:""
   };
 
   // Bloco try...catch para tratar possíveis erros
   try {
     // Chama a função criarPost (não definida aqui) para criar o post no banco de dados
     const postCriado = await criarPost(novoPost);
 
     // Constrói o novo caminho completo para a imagem
     const imagemAtualizada = `uploads/${postCriado.insertedId}.png`;
 
     // Renomeia o arquivo da imagem para o novo caminho (**cuidado com o uso de renameSync**)
     fs.renameSync(req.file.path, imagemAtualizada);
 
     // Envia uma resposta HTTP com status 200 (OK) e o post criado como corpo
     res.status(200).send(postCriado);
   } catch (err) {
     // Registra a mensagem de erro no console para depuração
     console.error(err.message);
 
     // Envia uma resposta HTTP com status 500 (Erro interno do servidor) e uma mensagem de erro genérica
     res.status(500).send({"erro":"Houve erro na requisição :("})
   }
 }

 // Este módulo contém as rotas para gerenciar posts, incluindo listar todos os posts, criar novos posts e fazer upload de imagens.
// As funções dependem das funções `getPosts` e `criarPost` definidas em `postModel.js` para interagir com o banco de dados.
