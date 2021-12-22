// Variavel para fazer a requisição do express para o projeto
const express = require("express");

// Variavel para o usar o metodo Router() junto com o express
const route = express.Router();

// Importação do homeController
const homeController = require("./src/controllers/homeController");

// Importação do loginController
const loginController = require("./src/controllers/loginController");

// Importação da contatoController
const contatoController = require("./src/controllers/contatoController");

// Importação do loginRequired
const { loginRequired } = require('./src/middlewares/middleware');

// Rota da home
route.get("/", homeController.index);

// Rotas de login
route.get('/login/index', loginController.index);
route.post('/login/register', loginController.register);
route.post('/login/login', loginController.login);
route.get('/login/logout', loginController.logout);

// Rota de contato
route.get('/contato/index', loginRequired, contatoController.index);
route.post('/contato/register', loginRequired, contatoController.register);
route.get('/contato/index/:id', loginRequired, contatoController.editIndex);
route.post('/contato/edit/:id', loginRequired, contatoController.edit);
route.get('/contato/delete/:id', loginRequired, contatoController.delete);



module.exports = route;
