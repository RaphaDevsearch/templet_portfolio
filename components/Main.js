import {
  CreateElement
} from './Utils/CreateElement.js';

export const Main = () => {
  return CreateElement('main', {
    children: [
      CreateElement('h1', {
        textContent: 'Welcome to My App'
      }),

      CreateElement('p', {
        textContent: 'This is the main content area.'
      })
    ]
  });
};