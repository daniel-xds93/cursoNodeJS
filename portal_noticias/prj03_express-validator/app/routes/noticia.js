module.exports = function(app){
    app.get('/noticia', function(req, res){
        var connection = app.config.dbConnection();

        // incluir a connection como parametro apos instanciar a classe noticiasModel
        var noticiasModel = new app.app.models.NoticiasDAO(connection);

        noticiasModel.getNoticia(function(error, result){
            res.render("noticias/noticia", {noticia : result });
        });
    })
}