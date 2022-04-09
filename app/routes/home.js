module.exports = function(app){
    app.get('/', function(req, res){
        // o método render só aparece por conta da instalação do pacote ejs
        res.render('home/index');
    });
};