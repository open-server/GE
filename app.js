'use strict';

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

var server = app.listen(3977, function() {
    console.log('Listening :)');
    server.close(function() { console.log('Doh :('); });
});

module.exports = app;