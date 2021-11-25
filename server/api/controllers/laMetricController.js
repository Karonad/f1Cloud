'use strict';
const url = 'http://ergast.com/api/f1'

// const http = require('http');
let constructorRepo = require('../repository/constructorRepository');

exports.ranking = function (req, res) {
    constructorRepo.getConstructorRanking().then(constructors => {
        console.log('test:', constructors)
        res.json(constructors) 
    })
};