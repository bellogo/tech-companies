import express from 'express';
import pool from './db.js';
import Company from './controllers/company.js';


// import bodyParser from 'body-parser';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.status(200).send({
    'message': 'YAY! Congratulations! Your first endpoint is working'
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