import React from 'react';
import characterCreator from '../apps/characterCreator.js';
import {createElementWithContext} from 'fluxible-addons-react';

const node = document.getElementById('character-creator');
const context = characterCreator.createContext();
const app = createElementWithContext(context);
React.render(app, node);
