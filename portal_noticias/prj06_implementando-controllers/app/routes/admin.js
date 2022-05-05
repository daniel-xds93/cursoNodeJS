const { check, validationResult } = require('express-validator');

module.exports = function(application){
    application.get('/formulario_inclusao_noticia', function(req, res){
        // para fazer isso deve-se incluir o modulo lá no arquivo server.js
        application.app.controllers.admin.formulario_inclusao_noticia(application, req, res);
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
        application.app.controllers.admin.noticias_salvar(application, req, res);
    });
        
}