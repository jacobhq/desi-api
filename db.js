// db.js
var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://process.env.DB_USER:process.env.DB_PASS@form.dzdgo.mongodb.net/process.env.DB_NAME?retryWrites=true&w=majority');