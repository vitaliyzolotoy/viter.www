var express = require('express'),
    http = require('http'),
    viter = express();

    ctrl1 = require('./desktop.bundles/index/_index.ctrl.js'),
    ctrl2 = require('./desktop.bundles/meanwhile/_meanwhile.ctrl.js'),
    ctrl3 = require('./desktop.bundles/article/_article.ctrl.js'),
    ctrl4 = require('./desktop.bundles/create/_create.ctrl.js');

viter.configure(function(){
    viter.set('port', process.env.PORT || 8787);
    viter.use(express.logger('dev'));
    viter.use(express.bodyParser());
    viter.use(express.methodOverride());
    viter.use(viter.router),
    viter.use('/desktop.bundles', express.static(__dirname + '/desktop.bundles')),
    viter.use('/desktop.blocks', express.static(__dirname + '/desktop.blocks'));
});

viter.configure('development', function(){
  viter.use(express.errorHandler());
});

viter.get('/', function(request, response) {
    ctrl1.index(request, response);
});

viter.get('/meanwhile/', function(request, response) {
    ctrl2.meanwhile(request, response);
});

viter.get('/article/', function(request, response) {
    ctrl3.article(request, response);
});

viter.get('/create/', function(request, response) {
    ctrl4.create(request, response);
});

viter.post('/create/', function(request, response) {
    ctrl4.create(request, response);
});

http.createServer(viter).listen(viter.get('port'), function(){
  console.log("viter listening on port " + viter.get('port'));
});
