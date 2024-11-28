import express from 'express'; // Importa o framework Express
import routes from './src/route/postRoutes.js'; // Importa as rotas definidas

const app = express(); // Cria uma instância da aplicação Express

app.use(express.static("uploads"))

// Monta as rotas definidas na aplicação Express
routes(app);

// Inicia o servidor na porta 3000 e loga uma mensagem no console
app.listen(3000, () => {
  console.log('Servidor Conectado na Porta 3000');
});