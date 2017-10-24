const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

let app = express();

let router = require('./services/router');

mongoose.connect('mongodb://localhost:crapp/crapp');

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use('/v1', router);

let PORT = process.env.PORT || 3000;
let HOST = process.env.HOST || '127.0.0.1';

console.log('Listening on', HOST, PORT);
app.listen(PORT, HOST);