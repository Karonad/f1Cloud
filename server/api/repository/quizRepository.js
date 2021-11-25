'use strict';


let mongoose = require('mongoose'),
    Quiz = mongoose.model('Quiz');




exports.CalculateValue = function(form) {
    let score = 0
    form.answers.forEach(element => {
        score += (element.value * element.ratio)
    });
    return score
};
    