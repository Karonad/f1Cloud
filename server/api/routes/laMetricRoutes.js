'use strict';
module.exports = function(app) {
    let laMetric = require('../controllers/laMetricController');

        // Routes
        app.route('/ranking')
        .get(laMetric.ranking)
};