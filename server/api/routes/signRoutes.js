'use strict';

module.exports = function(app) {
    let signin = require('../controllers/signController.js');


    // todoList Routes
    app.route('/signin')
        .post(signin.Senduser);

};