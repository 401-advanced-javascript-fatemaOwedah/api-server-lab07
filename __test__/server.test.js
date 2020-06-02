const { server } = require('../lib/server');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('web server', () => {
  it('should respond with 500', () => {
    return mockRequest.get('/bad')
      .then(results => {
        expect(results.status).toBe(500);
      }).catch(console.error);
  });
  it('should respond 404 of an invalid route', () => {
    return mockRequest
      .get('/invalidroute')
      .then(results => {
        expect(results.status).toBe(404);
      }).catch(console.log);
  });
  it('test post categories', () => {
    let record = {
      name: 'novel',
      display_name: 'story',
      description: 'good',
    };
    return mockRequest
      .post('/categories')
      .send(record)
      .then(result => {
        record.id = 1;
        expect(result.body).toEqual(record);
        expect(result.status).toEqual(200);
      });
  });
  it('test get categories', () => {
    return mockRequest
      .get('/categories')
      .then(result => {
        expect(result.status).toEqual(200);
      });
  });
  it('test get categories with id ', () => {
    return mockRequest
      .get('/categories/2')
      .then(result => {
        expect(result.status).toEqual(200);
      });
  });
  it('test put with id ', () => {
    return mockRequest
      .put('/categories/2')
      .then(result => {
        expect(result.status).toEqual(200);
      });
  });
  it('test patch with id ', () => {
    return mockRequest
      .patch('/categories/2')
      .then(result => {
        expect(result.status).toEqual(200);
      });
  });
  it('test delete with id ', () => {
    return mockRequest
      .put('/categories/2')
      .then(result => {
        expect(result.status).toEqual(200);
      });
  });
  ////////////////////
  it('test post products', () => {
    let record = {
      category: 'drink',
      name: 'Tea',
      display_name: 'libton',
      description: 'delecious',
    };
    return mockRequest
      .post('/products')
      .send(record)
      .then(result => {
        record.id = 1;
        expect(result.body).toEqual(record);
        expect(result.status).toEqual(200);
      });
  });
  it('test get products', () => {
    return mockRequest
      .get('/products')
      .then(result => {
        expect(result.status).toEqual(200);
      });
  });
  it('test get products with id ', () => {
    return mockRequest
      .get('/products/2')
      .then(result => {
        expect(result.status).toEqual(200);
      });
  });
  it('test products put with id ', () => {
    return mockRequest
      .put('/products/2')
      .then(result => {
        expect(result.status).toEqual(200);
      });
  });
  it('test products patch with id ', () => {
    return mockRequest
      .patch('/products/2')
      .then(result => {
        expect(result.status).toEqual(200);
      });
  });
  it('test products delete with id ', () => {
    return mockRequest
      .put('/products/2')
      .then(result => {
        expect(result.status).toEqual(200);
      });
  });
});