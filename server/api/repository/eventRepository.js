'use strict';
const url = 'http://ergast.com/api/f1'
const http = require('http');

exports.getNextGp = function () {
    return new Promise(function (resolve, reject) {
        http.get(url + '/current.json', (resp) => {
            let data = '';
            let json = '';
            let events = []
                // A chunk of data has been received.
                resp.on('data', (chunk) => {
                    json += chunk;
                });
    
                // The whole response has been received. Print out the result.
                resp.on('end', () => {
                    try {
                        data = JSON.parse(json);
                        data = data.MRData.RaceTable.Races
                        let now = new Date()
                        data.forEach(element => {
                            let date = new Date(element.date)
                            if (date.getTime() > now.getTime() ){
                                events.push(element)
                            }
                        });
                        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
                        let record = events[0]
                        let date = new Date(record.date + ' ' + record.time)
                        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: timezone }
                        let text = record.raceName + ', ' + date.toLocaleTimeString("fr-FR", options)
                        resolve(text)
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
    