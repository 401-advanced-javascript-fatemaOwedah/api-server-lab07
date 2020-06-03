# api-server-lab07
### Project: Express Routing & Connected API
### Author: Fatema Owedah

### Links and Resources

- [submission PR](https://github.com/401-advanced-javascript-fatemaOwedah/api-server-lab07/pull/2)
- [Swagger Link](https://app.swaggerhub.com/apis/fatema-owedah/lab.08/0.1)


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
http://localhost:3000/categories ===> app.post
http://localhost:3000/categories ===> app.get
http://localhost:3000/categories/:id ===> app.get
http://localhost:3000/categories/:id ===> app.put
http://localhost:3000/categories/:id ===> app.patch
http://localhost:3000/categories/:id ===> app.delete
///////////////////////////////////////////////////
http://localhost:3000/products ===> app.post
http://localhost:3000/products ===> app.get
http://localhost:3000/products/:id ===> app.get
http://localhost:3000/products/:id ===> app.put
http://localhost:3000/products/:id ===> app.patch
http://localhost:3000/products/:id ===> app.delete

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
![UML](/assets/lab8.jpeg)