import {
  CreateElement
} from './Utils/CreateElement.js';
import {Navbar} from './Navbar.js';

const Logo = () => {
  return CreateElement('h1', {
    textContent: 'Joy Full',
    className: 'logo'
  });
}

const btnCta = ({name, href}) => {
  return CreateElement('a', {
    textContent: name || 'Get Started',
    className: 'btn-cta',
    othersAttributes: {
      href: href || '#get-started'
    }
  });
}

const RoundBtn = () => {
  return CreateElement('button', {
    textContent: 'Click Me',
    className: 'round-btn'
  });
}

export const Header = () => {

  const navigations = [
    {
      name: 'Services',
      href: '#services'
    },
    {
      name: 'Work',
      href: '#work'
    },
    {
      name: 'About',
      href: '#about'
    },
    {
      name: 'Reviews',
      href: '#reviews'
    },
    {
      name: 'Blog',
      href: '#blog'
    },
    {
      name: 'Contact',
      href: '#contact'
    }
  ];

  return CreateElement('header', {
    className: 'header',
    children: [
      Logo(),
      Navbar(navigations),
      RoundBtn(),
      btnCta({
        name : 'contact us',
        href : '#contact'
      })
    ]
  });
};