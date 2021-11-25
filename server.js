'use strict';

let express = require('express');
var cors = require('cors');
const { resolve } = require('path'),
    {MongoClient} = require('mongodb'),
    bodyParser = require('body-parser');
global.fetch = require('node-fetch');


//set up variable for express and mongoose
let app = express(),
    port = 3001,
    mongoose = require('mongoose');
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




app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//importing routes
let laMetricRoutes = require('./server/api/routes/laMetricRoutes');
laMetricRoutes(app);


app.use(function(req, res) {
    res.status(404).send({ url: req.originalUrl + ' is not implemented' })
});

app.listen(process.env.PORT || port);
console.log('Morphee : RESTful API server started on: ' + port);
