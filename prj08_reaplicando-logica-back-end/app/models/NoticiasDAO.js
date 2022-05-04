
// passando a conexao como parametro da classe volta na classe onde instancia ela e ja passsa o valor de instancia
function NoticiasDAO(connection){
    // reaproveitando o código de instancia, para não passar toda vez a conexão pela function
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback){
    this._connection.query('select * from noticias order by data_criacao desc', callback);
}

NoticiasDAO.prototype.getNoticia = function(id_noticia, callback){
    this._connection.query('select * from noticias where id_noticia = '+ id_noticia.id_noticia, callback);
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
    //console.log(noticia);
    this._connection.query('insert into noticias set ? ', noticia, callback);
}

NoticiasDAO.prototype.get5UltimasNoticias = function(callback){
    // a linha abaixo passa o select para recuperar as 5 ultimas noticias
    this._connection.query('select * from noticias order by data_criacao desc limit 5', callback);
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