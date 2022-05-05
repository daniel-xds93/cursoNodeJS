module.exports = function(application){
    application.get('/', function(req, res){
        // a linha abaixo é o caminho ate chegar na função q esta na index dentro da pasta controllers
        application.app.controllers.index.home(application, req, res);
    });
}