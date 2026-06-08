import {
  CreateElement,
  Container 
} from './Utils/CreateElement.js';

export const Reviews = () => {
  return new Container([
    CreateElement('div', {
      className: 'reviews',
      children: [
        CreateElement('h2', {
          textContent: 'Customer Reviews'
        }),
        CreateElement('p', {
          textContent: 'Here are some reviews from my satisfied clients.'
        })
      ]
    })
  ]).render();
};