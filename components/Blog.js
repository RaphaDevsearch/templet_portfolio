import {
  CreateElement,
  Container 
} from './Utils/CreateElement.js';

export const Blog = () => {
  return new Container([
    CreateElement('div', {
      className: 'blog',
      children: [
        CreateElement('h2', {
          textContent: 'My Blog'
        }),
        CreateElement('p', {
          textContent: 'Here are some of my latest posts.'
        })
      ]
    })
  ]).render();
};