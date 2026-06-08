import {
  CreateElement,
  Container 
} from './Utils/CreateElement.js';

export const Work = () => {
  return new Container([
    CreateElement('div', {
      className: 'work',
      children: [
        CreateElement('h2', {
          textContent: 'My Work'
        }),
        CreateElement('p', {
          textContent: 'Here is a showcase of my recent projects and accomplishments.'
        })
      ]
    })
  ]).render();
};