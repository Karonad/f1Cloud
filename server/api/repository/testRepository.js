'use strict';


let mongoose = require('mongoose'),
    Test = mongoose.model('Test');

exports.findById = function(id) {
    return new Promise(function(resolve, reject) {
        Test.findById(id, function(err, test) {
            if (err)
                reject(err);
            resolve(test);
        });
    });
};

exports.find = function() {
    return new Promise(function(resolve, reject) {
        Test.find({}, function(err, test) {
            if (err)
                reject(err);
            resolve(test);
        });
    });

};

exports.save = function(test){
    console.log('1')
    async function createListing(client, test){
        console.log('2')
            const result = await client.db("StatsDeFoot").collection("test").insertOne(test);
           
            console.log(`New listing created with the following id: ${result.insertedId}`);
        }
    return createListing(client,
        {
            name: "Lovely Loft",
            summary: "A charming loft in Paris",
            bedrooms: 1,
            bathrooms: 1
        }
    );
   
}



exports.findOneAndUpdate = function(id, test){
    return new Promise(function(resolve, reject) {
        Test.findOneAndUpdate({ _id: id }, test, { new: true }, function(err, test) {
            if (err)
                reject(err);
            resolve(test);
        });
    });
}

exports.remove = function(id){
    return new Promise(function(resolve, reject) {
        Test.remove({ _id: id }, function(err, test) {
            if (err)
                reject(err);
            resolve(test);
        });
    });
}
