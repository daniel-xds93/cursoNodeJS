var express = require('express');

// a linha abaixo importa o módulo consign
var consign = require('consign');

// adicionando body-parser 
var bodyParser = require('body-parser');

// a linha abaixo faz o require do express-validator
var expressValidator = require('express-validator');
const { check } = require('express-validator');

// a linha abaixo executa a função do express
var app = express();

// a linha abaixo indica que o ejs é o gerador de views
app.set('view engine', 'ejs');

// a linha abaixo configura o diretorio de views padrão
app.set('views', './app/views');

// mapeando arquivos staticos
app.use(express.static('./app/public/'));

// a linha abaixo executa o body-parser e a execusão deve ser feita antes das linhas de rotas
app.use(bodyParser.urlencoded({extended: true}));

// a linha abaixo faz a inclusão do express-validator
//app.use(expressValidator(''));
app.use(check());

// inclusão do diretório routes deve ser feito após a execusao do express
consign()
    .include('app/routes')
    .then('config/dbConnection.js') // then() -> exporta o modulo de conficuração do banco de dados
    .then('app/models')
    .then('app/controllers')
    .into(app); // com isso eu posso desconsiderar as rotas que foram inseridas no app.js 

module.exports = app;