import pool from '../db/db';
import { validatePut, validateCompany } from '../validation/company_validation';

const Company = {
  homePage(req, res) {
    res.status(200).send({ message: 'Welcome to Tech-companies' });
  },

  getAll(req, res) {
    pool.query('SELECT * FROM companies')
      .then((result) => {
        res.status(200).json({ status: 200, message: 'Successfully retrived all companies.', data: result.rows });
      })
      .catch((e) => res.status(400).send(e));
  },

  create(req, res) {
    const { error } = validateCompany(req.body);
    if (error) return res.status(400).json({ status: 400, error: error.message });

    const text = 'INSERT INTO companies(name, location, ceo) VALUES($1, $2, $3) returning *';
    const values = [
      req.body.name,
      req.body.location,
      req.body.ceo,
    ];

    pool.query(text, values)
      .then((data) => res.status(201).json({ status: 201, message: 'Company has been added.', data: data.rows[0] }))
      .catch((e) => res.status(400).send(e));
  },

  getOne(req, res) {
    const text = 'SELECT * FROM companies WHERE id = $1';
    pool.query(text, [req.params.id])
      .then((result) => {
        if (!result.rows[0]) {
          return res.status(404).json({ status: 404, error: 'company not found' });
        }
        return res.status(200).json({ status: 200, message: 'Successfully retrived company.', data: result.rows[0] });
      }).catch((e) => res.status(400).send(e));
  },

  update(req, res) {
    const { error } = validatePut(req.body);
    if (error) return res.status(400).json({ status: 400, error: error.message });

    const findOneQuery = 'SELECT * FROM companies WHERE id=$1';
    const updateOneQuery = 'UPDATE companies SET name=$1,location=$2,ceo=$3 WHERE id=$4 returning *';

    pool.query(findOneQuery, [req.params.id])
      .then((result) => {
        if (!result.rows[0]) {
          return res.status(404).json({ status: 404, error: 'company not found' });
        }
        const values = [
          req.body.name || result.rows[0].name,
          req.body.location || result.rows[0].location,
          req.body.ceo || result.rows[0].ceo,
          req.params.id,
        ];
        pool.query(updateOneQuery, values)
          .then((response) => res.status(200).json({ status: 200, message: 'Company has been updated.', data: response.rows[0] }));
      })
      .catch((e) => res.status(400).send(e));
  },

  delete(req, res) {
    const deleteQuery = 'DELETE FROM companies WHERE id=$1 returning *';

    pool.query(deleteQuery, [req.params.id])
      .then((result) => {
        if (!result.rows[0]) {
          return res.status(404).json({ status: 404, error: 'company not found' });
        }
        return res.status(200).json({ status: 200, message: 'Company has been deleted.' });
      })
      .catch((e) => res.status(400).send(e));
  },
};

export default Company;
