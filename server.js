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
  companies(name, location, ceo)
  VALUES($1, $2, $3)
  returning *`;
  const values = [
    req.body.name,
    req.body.location,
    req.body.ceo
  ];

  pool.query(text, values)
    .then(data => {
      return res.status(201).send(data.rows[0]);
    })
    .catch(e => res.status(400).send(e));
});


app.get('/companies', (req, res) => {
  pool.query('SELECT * FROM companies')
    .then(result => {
      res.status(200).json({
        company: result.rows
      });
    })
    .catch(e => res.status(400).send(e));
});


app.get('/company/:id', (req, res) => {
  const text = 'SELECT * FROM companies WHERE id = $1';
  pool.query(text, [req.params.id])
    .then(result => {
      if (!result.rows[0]) {
        return res.status(404).send({
          'message': 'company not found'
        });
      }
      return res.status(200).send(result.rows[0]);
    }).catch(e => res.status(400).send(e));
});

app.put('/company/:id', (req, res) => {


  const findOneQuery = 'SELECT * FROM companies WHERE id=$1';
  const updateOneQuery = `UPDATE companies
      SET name=$1,location=$2,ceo=$3 WHERE id=$4 returning *`;

  pool.query(findOneQuery, [req.params.id])
    .then(result => {
      if (!result.rows[0]) {
        return res.status(404).send({
          'message': 'company not found'
        });
      }
      const values = [
        req.body.name || result.rows[0].name,
        req.body.location || result.rows[0].location,
        req.body.ceo || result.rows[0].ceo,
        req.params.id
      ];
      pool.query(updateOneQuery, values)
        .then(response => {
          return res.status(200).send(response.rows[0]);
        });
    })
    .catch(e => res.status(400).send(e));


});
app.delete('/company/:id', (req, res) => {
  const deleteQuery = 'DELETE FROM companies WHERE id=$1 returning *';

  pool.query(deleteQuery, [req.params.id])
    .then(result => {
      if (!result.rows[0]) {
        return res.status(404).send({
          'message': 'reflection not found'
        });
      }
      return res.status(204).send({
        'message': 'deleted'
      });
    })
    .catch(e => res.status(400).send(e));
});


app.listen(3000);
console.log('app running on port ', 3000);