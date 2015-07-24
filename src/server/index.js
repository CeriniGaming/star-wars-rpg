import express from 'express';
import {applyRoutes} from './router';

const app = express();

app.set('view engine', 'jade');

applyRoutes(app);

const server = app.listen(59907, () => {
  const {address, port} = server.address();
  
  console.log(`Example app listening at http://${address}:${port}`);
});
