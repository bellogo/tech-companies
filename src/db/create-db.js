import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

/**
 * Create Tables
 */

const queryText = `CREATE TABLE IF NOT EXISTS
      companies(
        id BIGSERIAL PRIMARY KEY,
        name VARCHAR(128) NOT NULL,
        location VARCHAR(128) NOT NULL,
        ceo VARCHAR(128) NOT NULL
      )`;

const createTable = () => {
  pool.query(queryText).then(() => {
    console.log('Connected to database created table');
    pool.end();
  }).catch((err) => {
    console.log(err);
    pool.end();
  });
};

export default createTable;
