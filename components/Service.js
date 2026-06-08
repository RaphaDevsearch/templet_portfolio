import {
  CreateElement,
  Container 
} from './Utils/CreateElement.js';

export const Service = () => {
  return new Container([
    CreateElement('div', {
      className: 'service',
      children: [
        CreateElement('h2', {
          textContent: 'My Services'
        }),
        CreateElement('p', {
          textContent: 'I offer a range of services to help bring your ideas to life.'
        })
      ]
    })
  ]).render();
};