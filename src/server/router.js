import React from 'react';
import {renderToString} from 'react-dom/server';
import CharacterCreator from '../components/CharacterCreator';

export function applyRoutes(app) {
  app.get('/', (req, res) => {
    const reactApp = renderToString(<CharacterCreator />);
    res.render('index', {reactApp});
  });
}
