// 'use strict';
//
// Object.defineProperty(exports, '__esModule', { value: true });
// var express_1 = require('express');
// var path_1 = require('path');
// var dotenv_1 = require('dotenv');
// var handler_1 = require('./build/handler');
//
// dotenv_1.default.config();
// var app = (0, express_1.default)();
// var port = process.env.PORT || 3000;
// app.use(express_1.default.static(path_1.default.join(__dirname, 'src')));
// app.get('/', function(req, res) {
//     res.send('Hello World!');
// });
// app.use(handler_1.handler);
// app.listen(port, function() {
//     console.log('Example app listening on port '.concat(port));
// });

import express from 'express';
import { handler } from './build/handler.js';

const app = express();
const port = 3000;

app.use(express.static('src'));
app.get('/expressroute', (req, res) => {
    res.send('Hello World!');
});

app.use(handler);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
