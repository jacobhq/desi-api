// index.js
var express = require('express');
var app = express();
var db = require('./db');
var FormController = require('./form/FormController');
app.use('./form', FormController);
module.exports = app;