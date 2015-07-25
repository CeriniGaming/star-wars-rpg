import express from 'express';
import characterCreator from './routes/character-creator';

const app = express();

app.set('view engine', 'jade');
app.use('/public', express.static('public'));
app.use('/', characterCreator);

const server = app.listen(59907, () => {
  const {address, port} = server.address();
  
  console.log(`Example app listening at http://${address}:${port}`);
});
