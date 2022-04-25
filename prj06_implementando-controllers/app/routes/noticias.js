var dbConnection = require('../../config/dbConnection');

module.exports = function(app){

    // a linha abaixo atribui a variavel a conexão do banco
    //var connection = dbConnection();

   

     app.get('/noticias', function(req, res){
        // a linha abaixo importa o modulo de conexao do mysql
        /*var mysql = require('mysql');

        // a linha abaixo faz a conexao com o banco de dados através dos parametros passado
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '1234',
            port: 3333,
            database: 'portal_noticias'
        });
        / *
            tive problemas com o comando acima entao tive q trocar a senha com o comando abaixo no prompt:
            ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '1234'
        */

         //a linha abaixo eu atribuo a conexão com o banco através do parametro passado
        var connection = app.config.dbConnection();

        // como agora no arquivo noticiasModels.js estou retornando uma função, a linha abaixo uso o operador new
        var noticiasModel = new app.app.models.NoticiasDAO(connection);

        noticiasModel.getNoticias(function(error, result){

        // a linha abaixo foi trocada pela de cima quando inclui o model
        //connection.query('select * from noticias', function(error, result){

            // res.send(result); -> aqui eu mostro na tela o resultado de uma variavel

            /*
                a linha abaixo eu passo o resultado para uma view
            */
            
                res.render("noticias/noticias", {noticias : result});
        });

        
        //res.render('noticias/noticias');
     });

     app.get('/noticia', function(req, res){
        var connection = app.config.dbConnection();

        // incluir a connection como parametro apos instanciar a classe noticiasModel
        var noticiasModel = new app.app.models.NoticiasDAO(connection);

        noticiasModel.getNoticia(function(error, result){
            res.render("noticias/noticia", {noticia : result });
        });
    })
};