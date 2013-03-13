/**
 * Module dependencies.
 */
var express = require('express'),
    http = require('http'),
    app = express(),

    controllers = require('./controllers'),
    models = require('./models');

app.configure(function(){
    app.set('port', process.env.PORT || 8787);
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router),
    app.use('/pages', express.static(__dirname + '/pages')),
    app.use('/blocks', express.static(__dirname + '/blocks'));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});




app.get('/blog/', function(request, response) {
    controllers.index(request, response);
});



app.get('/blog/new/', function(request, response) {
    controllers.new(request, response);
});

app.post('/blog/new/', function(request, response) {
    controllers.new(request, response);
});



app.get('/blog/update/', function(request, response) {
    controllers.update(request, response);
});

app.post('/blog/update/', function(request, response) {
    controllers.update(request, response);
});



















app.get('/blog/:id/', function(request, response) {
    controllers.index(request, response);
});

app.get('/blog/:id/remove/', function(request, response) {
    controllers.remove(request, response);
});

app.get('/add/', function(request, response) {
    controllers.add(request, response);
});

app.post('/add/', function(request, response) {
    controllers.add(request, response);
});

app.get('/settings/', function(request, response) {
    controllers.settings(request, response);
});

app.post('/settings/', function(request, response) {
    controllers.settings(request, response);
});



http.createServer(app).listen(app.get('port'), function(){
  console.log("viter app listening on port " + app.get('port'));
});
