import express from 'express';
import router from './src/routes/companies';

const app = express();

app.use(express.json());

app.use('/', router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server Running on: ${port}`);
});

export default app;
