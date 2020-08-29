import pool from '../db/db.js';

const Company = {
  getAll(req, res) {
    pool.query('SELECT * FROM companies')
      .then(result => {
        res.status(200).json({
          company: result.rows
        });
      })
      .catch(e => res.status(400).send(e));
  },

  create(req, res) {
    const text = `INSERT INTO companies(name, location, ceo) VALUES($1, $2, $3) returning *`;
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
  },

  getOne(req, res) {
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
  },

  update(req, res) {
    const findOneQuery = 'SELECT * FROM companies WHERE id=$1';
    const updateOneQuery = `UPDATE companies SET name=$1,location=$2,ceo=$3 WHERE id=$4 returning *`;

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
  },

  delete(req, res) {
    const deleteQuery = 'DELETE FROM companies WHERE id=$1 returning *';

    pool.query(deleteQuery, [req.params.id])
      .then(result => {
        if (!result.rows[0]) {
          return res.status(404).send({
            'message': 'company not found'
          });
        }
        return res.status(204).send({
          'message': 'deleted'
        });
      })
      .catch(e => res.status(400).send(e));
  }
};

export default Company;