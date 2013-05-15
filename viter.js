// http://pixelhandler.com/blog/2012/02/09/develop-a-restful-api-using-node-js-with-express-and-mongoose/

var express = require('express'),
    http = require('http'),
    viter = express(),

    ctrl2 = require('./desktop.bundles/meanwhile/_meanwhile.ctrl.js');

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

viter.get('/meanwhile/', function(request, response) {
    ctrl2.meanwhile(request, response);
});

http.createServer(viter).listen(viter.get('port'), function(){
  console.log("viter listening on port " + viter.get('port'));
});
