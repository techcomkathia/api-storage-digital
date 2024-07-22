// Módulo JSON Server
const jsonServer = require("json-server"); // Importa o módulo json-server para criar a API
const server = jsonServer.create(); // Cria uma instância do servidor JSON Server
const router = jsonServer.router("db.json"); // Cria um roteador que usa o arquivo db.json como banco de dados

// Certifique-se de usar o middleware padrão
const middlewares = jsonServer.defaults(); // Configura middlewares padrão como logging e suporte para CORS

server.use(middlewares); // Adiciona os middlewares padrão ao servidor

// Adicione isso antes de server.use(router)
server.use(
  // Adicione a rota personalizada aqui se necessário
  jsonServer.rewriter({
    "/*": "/$1", // Reescreve todas as rotas para o mesmo caminho no roteador
  })
);

server.use(router); // Adiciona o roteador ao servidor para manipular as rotas definidas em db.json

// Escute na porta
server.listen(3000, () => {
  console.log("JSON Server está rodando"); // Exibe uma mensagem no console quando o servidor está ativo
});

// Exporte a API do servidor
module.exports = server; // Exporta a instância do servidor para uso em outros módulos ou testes
