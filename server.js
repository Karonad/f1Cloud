'use strict';

let express = require('express');
var cors = require('cors');
global.fetch = require('node-fetch');


//set up variable for express and mongoose
let app = express(),
    port = 3001;
const option = {
    socketTimeoutMS: 30000,
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
};


//config cors
var corsOptions = {
    origin: ['https://morphee-luljsn6zy-wadaarik.vercel.app', 'https://morphee-wadaarik.vercel.app', 'http://localhost:3000'],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    allowedHeaders: 'Content-Type,Authorization, x-xsrf-token',
    exposedHeaders: 'Content-Range,X-Content-Range, Accept-Ranges, Content-Encoding, Content-Length, Content-Range'
}

app.use(cors(corsOptions));

//Load models
let Test = require('./server/api/models/testModel');
let Drivers = require('./server/api/models/driversModel');
let Signin = require('./server/api/models/signModel');

//importing routes
let testRoutes = require('./server/api/routes/testRoutes');
let driversRoutes = require('./server/api/routes/driversRoutes');
let signRoutes = require('./server/api/routes/signRoutes');
testRoutes(app);
driversRoutes(app);
signRoutes(app);


app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' is not implemented' })
});

app.listen(process.env.PORT || port);
console.log('F1 : RESTful API server started on: ' + port);
