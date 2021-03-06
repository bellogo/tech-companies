import express from 'express';
import createTable from './src/db/create-db';
import router from './src/routes/companies';

const app = express();

createTable();

app.use(express.json());

app.use('/api', router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server Running on: ${port}`);
});

module.exports = app;
