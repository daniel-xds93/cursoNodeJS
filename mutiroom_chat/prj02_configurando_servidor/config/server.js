// importar o modulo do framework express
var express = require('express');

// importar o modulo do consign
var consign = require('consign');

// importação do body-parser
var bodyParser = require('body-parser');

// importar o módulo do express-validator
var expressValidator = require('express-validator');

// inicialização do objeto express
var app = express()

// setar as variaveis 'view engine' e 'views' do express -> configuração do ejs
app.set('view engine', 'ejs');
// a propriedade view indica onde as views estão
app.set('views', './app/views');

// configurando middleware -> a propriedade static do express express.static
app.use(express.static('./app/public'));

// configurando o middleware body-parse
app.use(bodyParser.urlencoded({extended: true}));

// configurando o middleware express-validator
app.use(expressValidator());

// exportando o objeto
module.exports = app;