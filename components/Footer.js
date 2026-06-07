import {
  CreateElement
} from './Utils/CreateElement.js';

export const Footer = () => {
  return CreateElement('footer', {
    className: 'footer',
    children: [
      CreateElement('p', {
        textContent: '© 2024 My App. All rights reserved.'
      })
    ]
  });
};