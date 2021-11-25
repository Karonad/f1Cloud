'use strict';


let quizRepo = require('../repository/quizRepository.js');
let mongoose = require('mongoose'),
    Quiz = mongoose.model('Quiz');

exports.listAllAnswers = function(req, res) {
    Quiz.find({}, function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

exports.SendAnswer = function(req, res) {
    console.log(req.body);
    let newQuiz = new Quiz(req.body);
    newQuiz.score = quizRepo.CalculateValue(req.body);
    console.log(newQuiz);
    newQuiz.save(function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};