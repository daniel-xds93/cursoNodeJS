
// passando a conexao como parametro da classe volta na classe onde instancia ela e ja passsa o valor de instancia
function Noticias(connection){
    // reaproveitando o código de instancia, para não passar toda vez a conexão pela function
    this._connection = connection;
}

Noticias.prototype.getNoticias = function(callback){
    this._connection.query('select * from noticias', callback);
}

Noticias.prototype.getNoticia = function(callback){
    this._connection.query('select * from noticias where id_noticia = 2', callback);
}

Noticias.prototype.salvarNoticia = function(noticia, callback){
    this._connection.query('insert into noticias set ? ', noticia, callback);
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