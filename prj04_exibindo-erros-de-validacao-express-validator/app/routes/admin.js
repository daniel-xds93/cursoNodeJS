const { check, validationResult } = require('express-validator');

module.exports = function(application){
    application.get('/formulario_inclusao_noticia', function(req, res){
        res.render('admin/form_add_noticia', {validacao : {} });
    });

    // a função abaixo é a rota para salvar os dados no bando 
    // * validando os dados recebidos
    // check(name do campo html, 'msg de retono').notEmpty();-> indica que o campo não pode ser vazio
    application.post('/noticias/salvar', [
        check('titulo', 'Campo título é obtigatório').notEmpty(),
        check('resumo', 'Campo resumo é obrigatório').notEmpty(),
        check('resumo', 'o campo resumo deve conter entre 10 e 100 caracteres').isLength({min: 10, max: 100}),
        check('autor', 'Nome do autor é obrigatório').notEmpty(),
        check('data_noticia', 'Data da noticia é obrigatória').notEmpty().isDate({format: 'YYYY-MM-DD'}),
        check('noticia', 'O campo noticia é obrigatório').notEmpty()],
    function(req, res){
        var noticia = req.body;
    
        // validationErrors(req); -> retorna 'true' caso alguma das obrigatoriedades não seja atendida
        var erros = validationResult(req);

        console.log(erros.isEmpty());

        if(!erros.isEmpty()){
            //  a linha abaixo no segundo parametro estou passando para a view o jSon com as informaçoes do erro
            res.render('admin/form_add_noticia', { validacao : erros.array() });
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
    });
}