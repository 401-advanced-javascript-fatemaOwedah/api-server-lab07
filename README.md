# api-server-lab07
### Project: API Server
### Author: Fatema Owedah

### Links and Resources

- [submission PR](https://github.com/401-advanced-javascript-fatemaOwedah/api-server-lab07/pull/3)


#### Documintation

### Modules

### Setup

#### `jest`
#### `express`
#### `dotenv`
#### `supertest`

#### How to initialize/run your application 
- node index.js /nodemon
- after that go to swagger
http://localhost:4000/api/v1/categories ===> app.post
http://localhost:4000/api/v1/categories ===> app.get
http://localhost:4000/api/v1/categories/:id ===> app.get
http://localhost:4000/api/v1/categories/:id ===> app.put
http://localhost:4000/api/v1/categories/:id ===> app.patch
http://localhost:4000/api/v1/categories/:id ===> app.delete
///////////////////////////////////////////////////
http://localhost:4000/api/v1/products ===> app.post
http://localhost:4000/api/v1/products ===> app.get
http://localhost:4000/api/v1/products/:id ===> app.get
http://localhost:4000/api/v1/products/:id ===> app.put
http://localhost:4000/api/v1/products/:id ===> app.patch
http://localhost:4000/api/v1/products/:id ===> app.delete

to run test ===> npm test / npm run test
npm lint 



#### How do I install the app or library
- npm init -y 
- npm i express jest dotenv supertest
- npm install -g json-server
- npm install mongoose morgan cors

#### Tests
npm run test 

#### UML
![UML](/assets/lab9.jpeg)