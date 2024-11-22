import express from 'express';
import multer from 'multer';
import { listarPosts, postarNovoPost, uploadImagem } from "../controllers/postController.js";

// Configura o armazenamento do Multer para uploads de imagens
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      // Especifica o diretório para armazenar as imagens enviadas
      cb(null, 'uploads/'); // Substitua por seu caminho de upload desejado
    },
    filename: function (req, file, cb) {
      // Mantém o nome original do arquivo por simplicidade
      cb(null, file.originalname); // Considere usar uma estratégia de geração de nomes únicos para produção
    }
});

const upload = multer({ dest:"./uploads" , storage}); //middleware

const routes = (app) => {
    // Habilita o parser JSON para lidar com requisições com corpo no formato JSON.
    app.use(express.json());
    // Rota GET para obter todos os posts.

    // Busca todos os posts
    app.get('/posts', listarPosts);
    // Cria um post
    app.post('/posts', postarNovoPost);
    // Rota POST para upload de uma única imagem
    app.post('/upload', upload.single("imagem"), uploadImagem);
};
 

export default routes;


// Este módulo define as rotas para uma API Express que gerencia posts.
//
// As rotas disponíveis são:
// - GET /posts: Lista todos os posts.
// - POST /posts: Cria um novo post.
// - POST /upload: Faz o upload de uma imagem e associa a um post.
//
// O middleware Multer é utilizado para lidar com o upload de arquivos.
// As funções de controle (listarPosts, postarNovoPost, uploadImagem) 
// contêm a lógica de negócios para cada rota e são importadas de outro módulo.