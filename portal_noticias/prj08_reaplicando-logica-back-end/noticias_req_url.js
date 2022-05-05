var http = require('http');

var server = http.createServer( function(req, res){
    
    var categoria = req.url;

    console.log(categoria);
    if(categoria === '/tecnologia'){
        res.end("<html><body>Noticias de Tecnologia</body></html>");
    }else if(categoria === '/moda'){
        res.end("<html><body>Noticias de Moda</body></html>");
    }else if(categoria === '/esporte'){
        res.end("<html><body>Noticias de Esporte</body></html>");
    }else{
        res.end("<html><body>Portal de noticias</body></html>");
    }
});

// a linha abaixo escolhe a porta a ser usada
server.listen(3000);