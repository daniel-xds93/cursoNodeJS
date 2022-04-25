const { validationResult } = require('express-validator');

module.exports.formulario_inclusao_noticia = function(application, req, res){
    res.render('admin/form_add_noticia', {validacao : {}, noticia : {} });
}

module.exports.noticias_salvar = function(application, req, res){
    var noticia = req.body;
    
        // validationErrors(req); -> retorna 'true' caso alguma das obrigatoriedades não seja atendida
        var erros = validationResult(req);

        console.log(erros.isEmpty());

        if(!erros.isEmpty()){
            //  a linha abaixo no segundo parametro estou passando para a view o jSon com as informaçoes do erro
            // estou passando a variavel noticia para recuperar os dados e manter no formulario
            res.render('admin/form_add_noticia', { validacao : erros.array(), noticia : noticia });
            return;
        }

        // res.send(noticias);

        // ETAPAS A SEREM FEITAS PARA INSERIR DADOS NO BANCO DE DADOS

        // 1° recuperar a conexão
        var connection = application.config.dbConnection();

        // como estou retornando uma função aqui uso também o new para instanciar
        var noticiasModel = new application.app.models.NoticiasDAO(connection);

        // 2º recuperar a model
        noticiasModel.salvarNoticia(noticia, function(error, result){
            // a linha abaixo retorna para a rota que exibe as noticias
            //res.render("noticias/noticias", {noticia : result });
            // a linha abaixo permite redirecionar a rota
            res.redirect('/noticias');
        });

        // enviar os dados para a função que irá salvar as informações 

}