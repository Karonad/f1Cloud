
let driversRepo = require('../repository/driversRepository.js');
let constructorRepo = require('../repository/constructorRepository');

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
            res.json(data);
        });
    });
}
