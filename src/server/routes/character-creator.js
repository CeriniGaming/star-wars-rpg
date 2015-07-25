import {createFactory, renderToString} from 'react';
import {Router} from 'express';
import CharacterCreator from '../../components/CharacterCreator';

const router = Router();
const characterCreatorFactory = createFactory(CharacterCreator);

router.get('/', (req, res) => {
  const reactApp = renderToString(characterCreatorFactory());
  const entryPoint = '/public/character-creator.js';
  res.render('index', {reactApp, entryPoint});
});

export default router;
