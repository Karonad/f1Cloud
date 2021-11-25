'use strict';
module.exports = function(app) {
    let quiz = require('../controllers/quizController.js');


        // todoList Routes
        app.route('/quiz')
        .get(quiz.listAllAnswers)
        .post(quiz.SendAnswer);

};