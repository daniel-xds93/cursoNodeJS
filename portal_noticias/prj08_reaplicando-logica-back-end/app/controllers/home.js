module.exports.index = function(application, req, res){

    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    // a linha abaixo recupera as cinco ultimas noticias
    noticiasModel.get5UltimasNoticias(function(error, result){
        res.render('home/index', {noticias : result});
    });

    
}