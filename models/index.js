var mongoose = require('mongoose');

var models = {

    blog: function() {
        return mongoose.Schema({
            title: String,
            description: String,
            author: String,
            email: String
        });
    },

    article: function() {
        return mongoose.Schema({
            title: String,
            content: String,
            date: { type: Date, default: Date.now }
        });
    }

};

module.exports = models;