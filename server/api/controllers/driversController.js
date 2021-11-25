const http = require('http');


exports.listAllDrivers = function (req, res) {
    http.get('http://ergast.com/api/f1/current/driverStandings.json', (resp) => {
        let data = '';
        let json = '';

        // A chunk of data has been received.
        resp.on('data', (chunk) => {
            json += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            try {
                data = JSON.parse(json);
                data = data.MRData.StandingsTable.StandingsLists[0].DriverStandings
                res.json(data);
            } catch (error) {
                console.error(error)
            }


        });
    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
}