import express from 'express';
// import bodyParser from 'body-parser';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.status(200).send({'message': 'YAY! Congratulations! Your first endpoint is working','tria': 'girls with flat stomach'});
});

app.listen(3000);
console.log('app running on port ', 3000);