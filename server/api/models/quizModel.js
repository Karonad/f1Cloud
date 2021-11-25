'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let QuizSchema = new Schema({
    answers: [{
            nb:{
                type: Number
            },
            value:{
                type: Number
            },
            ratio:{
                type: Number,
                default: 1
            }
        }],
    score: {
        type: Number
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    author: {
        type: String,
        default: 'Anonymous'
    }
});

module.exports = mongoose.model('Quiz', QuizSchema);