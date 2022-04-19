
// passando a conexao como parametro da classe volta na classe onde instancia ela e ja passsa o valor de instancia
function NoticiasDAO(connection){
    // reaproveitando o código de instancia, para não passar toda vez a conexão pela function
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback){
    this._connection.query('select * from noticias', callback);
}

NoticiasDAO.prototype.getNoticia = function(callback){
    this._connection.query('select * from noticias where id_noticia = 2', callback);
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
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
    return NoticiasDAO;
}