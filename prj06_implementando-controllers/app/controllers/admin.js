
module.exports.formulario_inclusao_noticia = function(application, req, res){
    res.render('admin/form_add_noticia', {validacao : {}, noticia : {} });
}

module.exports.noticias_salvar = function(){

}