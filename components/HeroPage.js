import {CreateElement} from './Utils/CreateElement.js';

export const HeroPage = () => {
  return CreateElement('div', {
    className: 'hero',
    children: [
      CreateElement('h1', {
        textContent: 'Welcome to My Portfolio'
      }),
      CreateElement('p', {
        textContent: 'I am a passionate developer creating amazing web experiences.'
      })
    ]
  });
};