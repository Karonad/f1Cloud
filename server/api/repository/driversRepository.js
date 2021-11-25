'use strict';
const http = require('http');


exports.listAllDrivers = function (req, res) {
    return new Promise(function (resolve, reject) {
        http.get('http://ergast.com/api/f1/current/driverStandings.json', (resp) => {
            let data = '';
            let json = '';
            // A chunk of data has been received.
            resp.on('data', (chunk) => {
                json += chunk;
            });

            // The whole response has been received. Print out the result.
            resp.on('end', () => {
                let concatString = [];
                try {
                    data = JSON.parse(json);
                    data = data.MRData.StandingsTable.StandingsLists[0].DriverStandings
                } catch (error) {
                    console.error(error)
                }
                for (let drivers = 0; drivers < 5; drivers++) {
                    let driver = data[drivers];
                    let tmp = " " + driver.position + ". " + driver.Driver.givenName + " " + driver.Driver.familyName + " (" + driver.points + "p)";
                    concatString.push(tmp);
                }
                resolve(concatString);
            });
        }).on("error", (err) => {
            console.log("Error: " + err.message);
            reject(err);
        });
    });
}