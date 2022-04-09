// a linha abaixo importa o modulo de conexao do mysql
var mysql = require('mysql');

module.exports = function(){
    // a linha abaixo faz a conexao com o banco de dados através dos parametros passado
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        port: 3333,
        database: 'portal_noticias'
    });
}
/*
    tive problemas com o comando acima entao tive q trocar a senha com o comando abaixo no prompt:
    ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '1234'
*/