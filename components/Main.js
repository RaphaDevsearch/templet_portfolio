import {
  CreateElement
} from './Utils/CreateElement.js';
import{ HeroPage } from './HeroPage.js';
import { Service } from './Service.js';
export const Main = () => {

  const children = {
    heropage : HeroPage(),
    service : Service(),
    work    : CreateElement('h1', {textContent: 'Our Work'}),
    about   : CreateElement('h1', {textContent: 'About Us'}),
    review  : CreateElement('h1', {textContent: 'Customer Reviews'}),
    blog    : CreateElement('h1', {textContent: 'Our Blog'}),
    contact : CreateElement('h1', {textContent: 'Contact Us'}),
  }

  return CreateElement('main', {
    className: 'main',
    children: Object.values(children)
  });
};