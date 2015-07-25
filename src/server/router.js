import React, {renderToString} from 'react';
import CharacterCreator from '../components/CharacterCreator';

export function applyRoutes(app) {
  app.get('/', (req, res) => {
    const reactApp = renderToString(<CharacterCreator />);
    const entryPoint = '/public/character-creator.js';
    res.render('index', {reactApp, entryPoint});
  });
}
