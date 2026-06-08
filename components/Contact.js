import {
  CreateElement,
  Container 
} from './Utils/CreateElement.js';

export const Contact = () => {
  return new Container([
    CreateElement('div', {
      className: 'contact',
      children: [
        CreateElement('h2', {
          textContent: 'Contact Me'
        }),
        CreateElement('p', {
          textContent: 'Feel free to reach out to me for any inquiries or collaboration opportunities.'
        })
      ]
    })
  ]).render();
};