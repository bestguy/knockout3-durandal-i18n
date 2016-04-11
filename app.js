'use strict';

let express = require('express');
let logger = require('morgan');

let app = new express();

// ## Middleware

app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));

app.listen(3000, () => console.log('App running on port 3000'));
