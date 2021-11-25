'use strict';
const url = 'http://ergast.com/api/f1'
const http = require('http');

exports.getConstructorRanking = function () {
    return new Promise(function (resolve, reject) {
        http.get(url + '/current/constructorStandings.json', (resp) => {
            let data = '';
            let json = '';
            let ranking = []
                // A chunk of data has been received.
                resp.on('data', (chunk) => {
                    json += chunk;
                });
    
                // The whole response has been received. Print out the result.
                resp.on('end', () => {
                    try {
                        data = JSON.parse(json);
                        data = data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings
                        data.forEach(element => {
                            let text = element.position + '. ' + element.Constructor.name  + ' ' + '('+element.points+')'  
                            ranking.push(text)
                        });
                        resolve(ranking.slice(0, 5))
                    } catch (error) {
                        console.error(error)
                    }
                });
            }).on("error", (err) => {
                console.log("Error: " + err.message);
                reject(err)
            });
    })
};
    