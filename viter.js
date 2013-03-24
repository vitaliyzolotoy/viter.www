var express = require('express'),
    http = require('http'),
    viter = express(),

    controllers = require('./desktop.bundles/index/_index.ctrl.js');

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
    controllers.index(request, response);
});

http.createServer(viter).listen(viter.get('port'), function(){
  console.log("viter listening on port " + viter.get('port'));
});
