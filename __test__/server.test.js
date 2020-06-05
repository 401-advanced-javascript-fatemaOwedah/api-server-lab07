'use strict';

const {server}=require('../lib/server');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);
jest.spyOn(global.console,'log');

describe('web Server',()=>{
  let testObj = {
    category: 'drink',
    name: 'Tea',
    display_name: 'libton',
    description: 'delecious',
  };
  it('can post()', ()=> {
    return mockRequest.post('/products')
      .send(testObj)
      .then(record => {
        Object.keys(testObj).forEach(key=> {
          expect(record.body[key]).toEqual(testObj[key]);
        });
      });
  });
  
  it('can get()', ()=> {
    return mockRequest.get('/products')
      .then(results => {
        Object.keys(testObj).forEach(key=> {
          expect(results.body[0][key]).toEqual(testObj[key]);
        });
      });
  });
  it('can get()Id', ()=> {
    return mockRequest
      .get('/products/5ed81735cacced03486115c9')
      .then(result =>{
        expect(result.status).toEqual(200);
      });
  });
  it('can update()', ()=> {
    return mockRequest
      .put('/products/5ed81735cacced03486115c9')
      .then(result =>{
        expect(result.status).toEqual(200);
      });
  });
  it('can delete()', ()=> {
    return mockRequest
      .delete('/products/5ed81735cacced03486115c9')
      .then(result =>{
        expect(result.status).toEqual(200);
      });
  });
  it('should respond with 500', ()=> {  
    return mockRequest.get('/bad')
      .then(results=> {
        expect(results.status).toBe(500);
      }).catch(console.error);
  });
  it('not Found',()=>{
    return mockRequest
      .get('/wrongpath')
      .then(result=>{
        expect(result.status).toEqual(404);
      });
  });
  it('add object in products(POST)',()=>{
    let obj = {
      name: 'oooo',
    };
    return mockRequest
      .post('/products')  
      .send(obj)
      .then(result =>{
        expect(result.status).toEqual(500);
      });
  });
  it('add object in category(POST)',()=>{
    let obj = {
      name: 'oooo',
    };
    return mockRequest
      .post('/categories')  
      .send(obj)
      .then(result =>{
        expect(result.status).toEqual(500);
      });
  });
});
describe('web Server',()=>{
  let testObj = {
    name: 'Tea',
    display_name: 'libton',
    description: 'delecious',
  };
  it('can post()', ()=> {
    return mockRequest.post('/categories')
      .send(testObj)
      .then(record => {
        Object.keys(testObj).forEach(key=> {
          expect(record.body[key]).toEqual(testObj[key]);
        });
      });
  });
    
  it('can get()', ()=> {
    return mockRequest.get('/categories')
      .then(results => {
        Object.keys(testObj).forEach(key=> {
          expect(results.body[0][key]).toEqual(testObj[key]);
        });
      });
  });
  it('can get()Id', ()=> {
    return mockRequest
      .get('/categories/5ed81735cacced03486115c9')
      .then(result =>{
        expect(result.status).toEqual(200);
      });
  });
  it('can update()', ()=> {
    return mockRequest
      .put('/categories/5ed81735cacced03486115c9')
      .then(result =>{
        expect(result.status).toEqual(200);
      });
  });
  it('can delete()', ()=> {
    return mockRequest
      .delete('/categories/5ed81735cacced03486115c9')
      .then(result =>{
        expect(result.status).toEqual(200);
      });
  });
  it('should respond with 500', ()=> {  
    return mockRequest.get('/bad')
      .then(results=> {
        expect(results.status).toBe(500);
      }).catch(console.error);
  });
  it('not Found',()=>{
    return mockRequest
      .get('/wrongpath')
      .then(result=>{
        expect(result.status).toEqual(404);
      });
  });
  it('add object in products(POST)',()=>{
    let obj = {
      name: 'oooo',
    };
    return mockRequest
      .post('/products')  
      .send(obj)
      .then(result =>{
        expect(result.status).toEqual(500);
      });
  });
  it('add object in category(POST)',()=>{
    let obj = {
      name: 'oooo',
    };
    return mockRequest
      .post('/categories')  
      .send(obj)
      .then(result =>{
        expect(result.status).toEqual(500);
      });
  });
});