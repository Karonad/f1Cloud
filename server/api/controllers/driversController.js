
let driversRepo = require('../repository/driversRepository.js');

exports.getData = function(req, res) {
    let data = {
        "frames": [],
    };
    driversRepo.listAllDrivers().then(drivers => {
        let tmp = {"test": drivers, "icon": 12755};
        data.frames.push(tmp)
        res.json(data);
    });
}
