var http = require('http');

var server = http.createServer( function(req, res){
    // a linha abaixo retorna para o usuario 
    res.end("<html><body>Portal de noticias</body></html>");
});

// a linha abaixo escolhe a porta a ser usada
server.listen(3000);
