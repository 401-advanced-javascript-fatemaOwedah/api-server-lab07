'use strict';
require('dotenv').config();
const express = require('express');
const timeStamp = require('../middleware/timestamp');
const logRequest = require('../middleware/logger');
const notFound = require('../middleware/404');
const clientError = require('../middleware/500');

const app = express();
// Global MiddleWare 
app.use(express.json());
//Global Middleware Logger
app.use(logRequest);
app.use(timeStamp);

let categoryDb = [];
let productDb = [];
////////////////////////categories///////////////////////
app.post('/categories', (req, res) => {
    console.log("req.body: ", req.body);
    let info = req.body;
    let record = {
        name: info.name,
        display_name: info.display_name,
        description: info.description,
    };
    record.id = categoryDb.length + 1;
    categoryDb.push(record);
    res.json(record);
});
app.get('/categories', (req, res) => {
    res.json(categoryDb);
});
/////////////////categories/:id/////////////////
app.get('/categories/:id', (req, res) => {
    let id = parseInt(req.params.id);
    console.log(typeof (id));
    let categoriesById = categoryDb.filter(value => {
        if (value.id === id) {
            return value.id === id;
        }
    });
    res.json(categoriesById);
    console.log(categoriesById);
});
//////////PUT///////categories/:id/////////////////
app.put('/categories/:id', (req, res) => {
    let id = parseInt(req.params.id);
    let info = req.body;
    let record = {
        name: info.name,
        display_name: info.display_name,
        description: info.description,
    };
    record.id = id;
    categoryDb.forEach((value, i) => {
        if (value.id == id) {
            categoryDb[i] = record;
        }
    });
    res.json(record);
});
//////////PATCH///////categories/:id/////////////////
app.patch('/categories/:id', (req, res) => {
    let id = parseInt(req.params.id);
    let info = req.body;
    let record = {
        name: info.name,
        display_name: info.display_name,
        description: info.description,
    };
    record.id = id;
    categoryDb.forEach((value, i) => {
        if (value.id == id) {
            productDb[i] = record;
        }
    });
    res.json(record);
});

////////////DELETE///////////categories/:id///////////
app.delete('/categories/:id', (req, res) => {
    let id = parseInt(req.params.id);
    categoryDb= forEach((val, i) => {
        if (val.id === id) {
            categoryDb.splice(i, 1);
        }
    });
    res.json(categoryDb);
});
///////POST//////////product///////////////////////////
app.post('/products', (req, res) => {
    console.log("req.body: ", req.body);
    let info = req.body;
    let record = {
        category: info.category,
        name: info.name,
        display_name: info.display_name,
        description: info.description,
    };
    record.id = categoryDb.length + 1;
    productDb.push(record);
    res.json(record);
});
//////GET//////////////////products//////////////////////////
app.get('/products', (req, res) => {
    res.json(productDb);
});
//////GET//////////////////products/:id/////////////////////
app.get('/products/:id', (req, res) => {
    let id = parseInt(req.params.id);
    console.log(typeof (id));
    let productById = productDb.filter(value => {
        if (value.id === id) {
            return value.id === id;
        }
    });
    res.json(productById);
    console.log(productById);
});
//////////PUT////////////////products/:id////////////////////
app.put('/products/:id', (req, res) => {
    let id = parseInt(req.params.id);
    let info = req.body;
    let record = {
        category: info.category,
        name: info.name,
        display_name: info.display_name,
        description: info.description,
    };
    record.id = id;
    productDb.forEach((value, i) => {
        if (value.id == id) {
            productDb[i] = record;
        }
    });
    res.json(record);
});
//////////PATCH///////products/:id/////////////////
app.patch('/products/:id', (req, res) => {
    let id = parseInt(req.params.id);
    let info = req.body;
    let record = {
        category: info.category,
        name: info.name,
        display_name: info.display_name,
        description: info.description,
    };
    record.id = id;
    productDb.forEach((value, i) => {
        if (value.id == id) {
            productDb[i] = record;
        }
    });
    res.json(record);
});

////////////DELETE///////////products/:id///////////
app.delete('/products/:id', (req, res) => {
    let id = parseInt(req.params.id);
    productDb.forEach((val, i) => {
        if (val.id === id) {
            productDb.splice(i, 1);
        }
    });
    res.json(productDb);
});
//////////////////////////////////////////////////////
app.get('/bad', (req, res)=> {
    res.status(500).json({});
 });
app.use('*', notFoundHandler);
app.use(errorHandler);

function notFoundHandler(req, res, next) {
    res.status(404);
    res.send({ err: 'not found' })
}
function errorHandler(err, req, res, next) {
    res.status(500);
    res.json({ err: err });
}
module.exports = {
    server: app,
    start: (port) => {
        const PORT = port || process.env.PORT || 3000;
        app.listen(PORT, () => { console.log(`Listening on port ${PORT}`) });
    }
}