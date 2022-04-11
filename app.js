var app = require('./config/serve');

/*
    ******* Comentei essas rotas por que instalei o consign e ja criei as rotas no server.js
    
var rotaNoticias = require('./app/routes/noticias');
// a linha abaixo executa a função
rotaNoticias(app);

var rotaHome = require('./app/routes/home');
rotaHome(app);

// a linha abaixo faz referencia e ja executa o comando com ()();
var rotaFormInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia')(app);

*/

/*
    app.get('/', function(req, res){
        res.send("<html><body>Requisição e resposta express</body></html>")
    });
    
*/

// a linha abaixo lista no prompt a requisição ao servidor
app.listen(3000, function(){
    console.log("Start server express");
    // apenas consigo mostrar a mensagem porque no arquivo mod_test indiquei que estou exportando
    //console.log(msg);
})