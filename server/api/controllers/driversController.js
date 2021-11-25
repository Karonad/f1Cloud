
let driversRepo = require('../repository/driversRepository.js');
let constructorRepo = require('../repository/constructorRepository');
let eventRepo = require('../repository/eventRepository');

exports.getData = function(req, res) {
    let data = {
        "frames": [],
    };
    driversRepo.listAllDrivers().then(drivers => {
        let tmpD = {"text": drivers, "icon": 12755};
        data.frames.push(tmpD);
        constructorRepo.getConstructorRanking().then(constructors => {
            let tmpC = {"text": constructors, "icon": 12755};
            data.frames.push(tmpC);
            eventRepo.getNextGp().then(nextGp => {
                let tmpNgp = { "text": nextGp, "icon": 12755 };
                data.frames.push(tmpNgp)
                res.json(data);
            })
        });
    });
}
