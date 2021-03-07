import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

pool.on('connect', () => {
  console.log('connected to the db');
});

pool.on('error', (err) => {
  console.log(err);
});

const queryText = `CREATE TABLE IF NOT EXISTS
      companies(
        id BIGSERIAL PRIMARY KEY,
        name VARCHAR(128) NOT NULL,
        location VARCHAR(128) NOT NULL,
        ceo VARCHAR(128) NOT NULL
      )`;

pool.query(queryText).catch((err) => {
  console.log(err);
  pool.end();
});

export default pool;
