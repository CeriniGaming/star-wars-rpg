import {createFactory, renderToString} from 'react';
import {Router} from 'express';
import characterCreator from '../../apps/characterCreator';
import {createElementWithContext} from 'fluxible-addons-react';

const router = Router();

router.get('/', (req, res) => {
  const entryPoint = '/public/character-creator.js';
  const context = characterCreator.createContext();
  const reactApp = renderToString(createElementWithContext(context));
  res.render('index', {reactApp, entryPoint});
});

export default router;
