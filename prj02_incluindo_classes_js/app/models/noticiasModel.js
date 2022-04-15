function Noticias(){}

Noticias.prototype.getNoticias = function(connection, callback){
    connection.query('select * from noticias', callback);
}

Noticias.prototype.getNoticia = function(connection, callback){
    connection.query('select * from noticias where id_noticia = 2', callback);
}

Noticias.prototype.salvarNoticia = function(noticia, connection, callback){
    connection.query('insert into noticias set ? ', noticia, callback);
}


module.exports = function(){

    // o método abaixo lista todas as noticias
    /*
    
    o método abaixo foi passado para a função lá em cima assim como as demais
        this.getNoticias = function(connection, callback){
            connection.query('select * from noticias', callback);
        }
    */

    // usando a forma deixando as funções fora do escopo agora eu retorno apenas a function
    return Noticias;
}