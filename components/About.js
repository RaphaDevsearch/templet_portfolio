import {
  CreateElement,
  Container 
} from './Utils/CreateElement.js';

export const About = () => {
  return new Container([
    CreateElement('div', {
      className: 'about',
      children: [
        CreateElement('h2', {
          textContent: 'About Me'
        }),
        CreateElement('p', {
          textContent: 'I am a passionate developer with experience in creating web applications.'
        })
      ]
    })
  ]).render();
};