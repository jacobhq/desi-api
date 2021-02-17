// FormController.js
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Form = require('./form');
router.post('/', function (req, res) {
    Form.create({
            name : req.body.name,
            email : req.body.email,
            company : req.body.company
        }, 
        function (err, form) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(form);
        });
});
// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', function (req, res) {
    Form.find({}, function (err, form) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(form);
    });
});
module.exports = router;