var express = require('express');

// a linha abaixo executa a função do express
var app = express();

// a linha abaixo indica que o ejs é o gerador de views
app.set('view engine', 'ejs');

// a linha abaixo configura o diretorio de views padrão
app.set('views', './app/views');

module.exports = app;