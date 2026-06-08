import {
  CreateElement
} from './Utils/CreateElement.js';
import{ HeroPage } from './HeroPage.js';
import { Service } from './Service.js';
import { Work } from './Work.js';
import { About } from './About.js';
import { Reviews } from './Reviews.js';
import { Blog } from './Blog.js';
import { Contact } from './Contact.js';
export const Main = () => {

  const children = {
    heropage : HeroPage(),
    service : Service(),
    work    : Work(),
    about   : About(),
    review  : Reviews(),
    blog    : Blog(),
    contact : Contact(),
  }

  return CreateElement('main', {
    className: 'main',
    children: Object.values(children)
  });
};