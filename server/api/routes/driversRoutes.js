'use strict';
module.exports = function(app) {
    let drivers = require('../controllers/driversController.js');


        // todoList Routes
        app.route('/drivers')
        .get(drivers.getData)
};