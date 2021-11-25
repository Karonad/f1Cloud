'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let TestSchema = new Schema({
    name: {
        type: String
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'ongoing', 'completed']
        }],
        default: ['pending']
    }
});

module.exports = mongoose.model('Test', TestSchema);