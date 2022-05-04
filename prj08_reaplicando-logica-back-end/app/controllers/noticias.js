module.exports.noticia = function(application, req, res){
    var connection = application.config.dbConnection();

    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    //  req.query -> retorna todos os parametros passado por url
    //console.log(req.query);
    var id_noticia = req.query;

    noticiasModel.getNoticia(id_noticia, function(error, result){
        res.render("noticias/noticia", {noticia : result });
    });
}

module.exports.noticias = function(application, req, res){

    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.getNoticias(function(error, result){
        res.render("noticias/noticias", {noticias : result});
    });
}