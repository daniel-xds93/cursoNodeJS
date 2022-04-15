module.exports = function(){

    // o método abaixo lista todas as noticias
    this.getNoticias = function(connection, callback){
        connection.query('select * from noticias', callback);
    }

    // o método abaixo lista uma noticia especifica
    this.getNoticia = function(connection, callback){
        connection.query('select * from noticias where id_noticia = 2', callback);
    }

    // o método abaixo insere uma noticia no banco de dados
    this.salvarNoticia = function(noticia, connection, callback){
        connection.query('insert into noticias set ? ', noticia, callback);
    }

    return this;
}