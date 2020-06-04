'use strict';

const express = require('express');
const route = express.Router();

const categories = require('../models/categories/categories-model');
const products = require('../models/product/product-model');

function getModel(req, res, next) {
  let model = req.params.model; 
  switch(model) {
  case 'products':
    req.model = products;
    next();
    return;
  case 'categories':
    req.model = categories;
    next();
    return;
  default:
    next('Invalid Model');
    return;
  }
}
route.param('model',getModel);
route.post('/api/v1/:model',postModel);
route.get('/api/v1/:model',getAll);
route.get('/api/v1/:model/:id',getById);
route.put('/api/v1/:model/:id',updateOne);
route.delete('/api/v1/:model/:id', deleteOne);

function postModel(req,res,next){
  req.model
    .post(req.body)
    .then(addResult=>{res.status(201).json(addResult);})
    .catch(next);
}
function getAll(req,res,next){
  req.model
    .get()
    .then(Result =>{
      let count = Result.length;
      res.json({count,Result});})
    .catch(next);
}
function getById(req,res,next){
  req.model
    .get(req.params.id)
    .then(Result =>{res.status(200).json(Result);})
    .catch(next);  
}
function updateOne(req,res,next){
  req.model
    .update(req.params.id , req.body)
    .then(ResultafterUpdate =>{res.status(200).json(ResultafterUpdate);})
    .catch(next);  
}
function deleteOne(req,res,next){
  req.model
    .delete(req.params.id)
    .then(ResultDelete =>{res.status(200).json(`the Result delete successfully`);})
    .catch(next);
}
module.exports = route; 