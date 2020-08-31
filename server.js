import express from 'express';
import createTable from "./src/db/create-db";
import Company from './src/controllers/company.js';


// import bodyParser from 'body-parser';

const app = express();

createTable();

app.use(express.json());

app.get('/', (req, res) => {
  return res.status(200).send({
    'message': 'Welcome to Tech-companies'
  });
});

app.post('/companies', Company.create);
app.get('/companies', Company.getAll);
app.get('/company/:id', Company.getOne);
app.put('/company/:id', Company.update);
app.delete('/company/:id', Company.delete);

const port = process.env.PORT || 3000;
app.listen(port);
console.log(`app running on port , ${port}`);
// console.log(process.env.DATABASE_PASSWORD);

module.exports = app;