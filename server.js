import express from 'express';
import {
  Pool
} from 'pg';
import dotenv from 'dotenv';


// import bodyParser from 'body-parser';

const app = express();

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
  console.log('connected to the db');
});

// const query = (text, params) => {
//   return new Promise((resolve, reject) => {
//     pool.query(text, params)
//     .then((res) => {
//       resolve(res);
//     })
//     .catch((err) => {
//       reject(err);
//     })
//   })
// }


app.use(express.json());

app.get('/', (req, res) => {
  return res.status(200).send({
    'message': 'YAY! Congratulations! Your first endpoint is working',
    'tria': 'girls with flat stomach'
  });
});

app.post('/companies', (req, res) => {
  const text = `INSERT INTO
  reflections(name, location, ceo)
  VALUES($1, $2, $3)
  returning *`;
  const values = [
    req.body.name,
    req.body.location,
    req.body.ceo
  ];

  try {
    const { rows } = await pool.query(text, values);
    return res.status(201).send(rows[0]);
  } catch (error) {
    return res.status(400).send(error);
  }
});

try {
  const res = await client.query(text, values)
  console.log(res.rows[0])
  // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
} catch (err) {
  console.log(err.stack)
}


app.get('/companies', (req, res) => {

});
app.get('company:id', (req, res) => {

});
app.put('company:id', (req, res) => {

});
app.delete('company:id', (req, res) => {

});


app.listen(3000);
console.log('app running on port ', 3000);