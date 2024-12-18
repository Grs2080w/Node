import conexaoBD from "../config/dbConfig.js";
import { ObjectId } from "mongodb";

// Estabelece a conexão com o banco de dados MongoDB usando as informações da string de conexão.
const conexao = await conexaoBD(process.env.STRING_CONEXAO);

// Função assíncrona para obter todos os posts da coleção 'posts' no banco de dados 'firstable'.
export async function getPosts() {
    const db = conexao.db('firstable'); // Seleciona o banco de dados 'firstable'
    const colecao = db.collection('posts'); // Seleciona a coleção 'posts'
    return colecao.find().toArray(); // Retorna todos os documentos da coleção como um array
}

// Função assíncrona para criar um novo post no banco de dados
export async function criarPost(novoPost) {
    // Conecta ao banco de dados 'firstable'
    const db = conexao.db('firstable');
    // Seleciona a coleção 'posts'
    const colecao = db.collection('posts');
    // Insere o novo post na coleção e retorna o resultado da operação
    return colecao.insertOne(novoPost);
  }


  export async function atualizaPost(id, post) {
    // Conecta ao banco de dados 'firstable'
    const db = conexao.db('firstable');
    // Seleciona a coleção 'posts'
    const colecao = db.collection('posts');


    try {
      // Tranforma o id em binario para que o mongoDB posa entender.
      const objId = ObjectId.createFromHexString( id )
      // Seleciona qual o id, e qual objeto o mongoDB irá setar para a atualização
      return colecao.updateOne({_id:new ObjectId(objId)}, {$set:post});

    }catch(err) {
      console.log(err)
      resizeBy.status(500).send({"erro":"Houve erro na requisição."})
    }
    
  }




  // Este módulo fornece funções para interagir com a coleção 'posts' no banco de dados MongoDB 'firstable'.
//
// - getPosts(): Busca todos os posts da coleção 'posts'.
// - criarPost(novoPost): Insere um novo post na coleção 'posts'.
//
// As funções dependem da função conexaoBD para estabelecer a conexão com o banco de dados.
// A string de conexão é obtida da variável de ambiente STRING_CONEXAO.