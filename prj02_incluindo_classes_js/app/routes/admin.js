module.exports = function(application){
    application.get('/formulario_inclusao_noticia', function(req, res){
        res.render('admin/form_add_noticia');
    });

    // a função abaixo é a rota para salvar os dados no bando 
    application.post('/noticias/salvar', function(req, res){
        var noticia = req.body;
        // res.send(noticias);

        // ETAPAS A SEREM FEITAS PARA INSERIR DADOS NO BANCO DE DADOS

        // 1° recuperar a conexão
        var connection = application.config.dbConnection();

        // como estou retornando uma função aqui uso também o new para instanciar
        var noticiasModel = new application.app.models.noticiasModel;

        // 2º recuperar a model
        noticiasModel.salvarNoticia(noticia, function(error, result){
            // a linha abaixo retorna para a rota que exibe as noticias
            //res.render("noticias/noticias", {noticia : result });
            // a linha abaixo permite redirecionar a rota
            res.redirect('/noticias');
        });

        // enviar os dados para a função que irá salvar as informações 
    });
}