
let driversRepo = require('../repository/driversRepository.js');
let constructorRepo = require('../repository/constructorRepository');
let eventRepo = require('../repository/eventRepository');

exports.getData = function (req, res) {
    let data = {
        "frames": [],
    };
    driversRepo.listAllDrivers().then(drivers => {
        let introDriver = { "text": "Top 5 pilotes", "icon": 12755 };
        data.frames.push(introDriver);
        for (i in drivers) {
            if (drivers[i] == drivers[0]) {
                let tmpD = { "text": drivers[i], "icon": 84 };
                data.frames.push(tmpD);
            } else {
                let tmpD = { "text": drivers[i], "icon": 12755 };
                data.frames.push(tmpD);
            }
        }
        constructorRepo.getConstructorRanking().then(constructors => {
            let introConstructor = { "text": "Top 5 constructeurs", "icon": 12755 };
            data.frames.push(introConstructor);
            for (i in constructors) {
                if (constructors[i] == constructors[0]) {
                    let tmpC = { "text": constructors[i], "icon": 84 };
                    data.frames.push(tmpC);
                } else {
                    let tmpC = { "text": constructors[i], "icon": 12755 };
                    data.frames.push(tmpC);
                }
            }
            eventRepo.getNextGp().then(nextGp => {
                let introNextGp = { "text": "Prochain Grand Prix", "icon": 12755 };
                data.frames.push(introNextGp);
                let tmpNgp = { "text": nextGp, "icon": 12755 };
                data.frames.push(tmpNgp)
                res.json(data);
            })
        });
    });
}
