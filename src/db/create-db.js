import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

let pool = new pg.Pool({
	connectionString: process.env.DATABASE_URL,
});

// DATABASE_URL=postgres://postgres:1234@127.0.0.1:5432/bela
if (process.env.NODE_ENV === "development") {
	pool = new pg.Pool({
		user: "postgres",
		host: "localhost",
		database: "bela",
		password: process.env.DATABASE_PASSWORD,
		port: "5432",
	});
} else if (process.env.NODE_ENV === "testing") {
	pool = new pg.Pool({
		user: "postgres",
		host: "localhost",
		database: "companiestest",
		password: process.env.DATABASE_PASSWORD,
		port: "5432",
	});
}

/**
 * Create Tables
 */

const queryText =
    `CREATE TABLE IF NOT EXISTS
      companies(
        id BIGSERIAL PRIMARY KEY,
        name VARCHAR(128) NOT NULL,
        location VARCHAR(128) NOT NULL,
        ceo VARCHAR(128) NOT NULL
      )`;


const createTable = () => {
	pool
		.query(queryText)
		.then(() => {
			// console.log(res);
			console.log("Connected to database created table");
			pool.end();
		})
		.catch((err) => {
			console.log(err);
			pool.end();
		});
};

export default createTable;