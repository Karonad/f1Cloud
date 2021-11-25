'use strict';


let signrepo = require('../repository/signRepository.js');
let mongoose = require('mongoose'),
    signin = mongoose.model('signin');


exports.Senduser = function(req, res) {
    console.log(req.body);
    let newUser = new signin(req.body);
    console.log(newUser);
    newUser.save(function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};