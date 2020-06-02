# api-server-lab07

### Project: Express
### Author: Fatema Owedah

### Links and Resources

- [submission PR](https://github.com/401-advanced-javascript-fatemaOwedah/api-server-lab07/pull/1)
- [Swagger Link](https://app.swaggerhub.com/apis/fatema-owedah/lab-07/0.1)


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
http://localhost:4000/categories ===> app.post
http://localhost:4000/categories ===> app.get
http://localhost:4000/categories/:id ===> app.get
http://localhost:4000/categories/:id ===> app.put
http://localhost:4000/categories/:id ===> app.patch
http://localhost:4000/categories/:id ===> app.delete
///////////////////////////////////////////////////
http://localhost:4000/products ===> app.post
http://localhost:4000/products ===> app.get
http://localhost:4000/products/:id ===> app.get
http://localhost:4000/products/:id ===> app.put
http://localhost:4000/products/:id ===> app.patch
http://localhost:4000/products/:id ===> app.delete

to run test ===> npm test / npm run test



#### How do I install the app or library
- npm init -y 
- npm i express jest dotenv supertest
- npm install -g json-server

#### Tests
npm run test 

#### UML
![UML](/assets/lab7.jpeg)