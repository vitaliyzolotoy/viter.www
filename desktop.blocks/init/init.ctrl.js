// Init API
var express = require('express'),
    http = require('http'),
    mongoose = require('mongoose'),
    schema = mongoose.Schema,
    viter = express();

// Database
mongoose.connect('mongodb://localhost/viter');

// Configure
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

viter.get('/api', function (request, response) {
    response.send('<html><head><title>test</title><script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script></head><body></body></html>');
});

http.createServer(viter).listen(viter.get('port'), function(){
    console.log('API listening on port ' + viter.get('port'));
});
