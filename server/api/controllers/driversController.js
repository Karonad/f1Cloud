
let driversRepo = require('../repository/driversRepository.js');
let constructorRepo = require('../repository/constructorRepository');
let eventRepo = require('../repository/eventRepository');

exports.getData = function(req, res) {
    let data = {
        "frames": [],
    };
    driversRepo.listAllDrivers().then(drivers => {
        let introDriver = { "text": "Top 5 pilotes", "icon": 12755 };
        data.frames.push(introDriver);
        let tmpD = {"text": drivers, "icon": 12755};
        data.frames.push(tmpD);
        constructorRepo.getConstructorRanking().then(constructors => {
            let introConstructor = { "text": "Top 5 constructeurs", "icon": 12755 };
            data.frames.push(introConstructor);
            let tmpC = {"text": constructors, "icon": 12755};
            data.frames.push(tmpC);
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
