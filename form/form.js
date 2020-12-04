var mongoose = require('mongoose');  
var FormSchema = new mongoose.Schema({  
  name: String,
  email: String,
  company: String
});
mongoose.model('form', FormSchema);
module.exports = mongoose.model('form');