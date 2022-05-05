// importando as configurações do servidor
var app = require('./config/server');

// parametrizar a porta de escuta, ou seja, em qual porta sera respondida as requisições
app.listen(80, function(){
    console.log("Servidor on");
});
