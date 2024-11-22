import { MongoClient } from "mongodb"; // Importa o cliente MongoDB da biblioteca MongoDB

export default async function conexaoBD(stringConexao) { // Define uma função assíncrona para conectar ao banco de dados

  let mongoClient; // Declara uma variável para armazenar o cliente MongoDB

  try { // Bloco try-catch para lidar com possíveis erros de conexão

    
    mongoClient = new MongoClient(stringConexao); // Cria uma nova instância do cliente MongoDB com a string de conexão fornecida
    console.log('Conecting in Cluster on Data Base...'); // Imprime uma mensagem no console indicando que está conectando ao cluster do banco de dados
    await mongoClient.connect(); // Conecta assincronamente ao banco de dados
    console.log("Sucess on conection to Data Base"); // Imprime uma mensagem de sucesso de conexão

    return mongoClient; // Retorna o cliente MongoDB conectado



  } catch (err) { // Bloco catch para lidar com erros

    console.log('There was a err on conection :(', err); // Imprime uma mensagem de erro no console, incluindo o erro
    process.exit(); // Encerra o processo em caso de erro crítico
    
  }
}


// Função conexaoBD(stringConexao):
// Esta função estabelece uma conexão com o banco de dados MongoDB utilizando a string de conexão fornecida. 
// Retorna um objeto MongoClient que pode ser usado para realizar operações de CRUD (Create, Read, Update, Delete) no banco de dados.
// Em caso de erro, a função imprime uma mensagem de erro no console e encerra o processo.