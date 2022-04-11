var express = require('express');

// a linha abaixo importa o módulo consign
var consign = require('consign');

// a linha abaixo executa a função do express
var app = express();

// a linha abaixo indica que o ejs é o gerador de views
app.set('view engine', 'ejs');

// a linha abaixo configura o diretorio de views padrão
app.set('views', './app/views');

// inclusão do diretório routes deve ser feito após a execusao do express
consign()
    .include('app/routes')
    .then('config/dbConnection.js') // then() -> exporta o modulo de conficuração do banco de dados
    .then('app/models')
    .into(app); // com isso eu posso desconsiderar as rotas que foram inseridas no app.js 

module.exports = app;