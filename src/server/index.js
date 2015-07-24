import express from 'express';

const app = express();

app.set('view engine', 'jade');

app.get('/', (req, res) => {
  res.render('index', {});
});

const server = app.listen(59907, () => {
  const {address, port} = server.address();
  
  console.log(`Example app listening at http://${address}:${port}`);
});
