import {
  CreateElement
} from './Utils/CreateElement.js';
import {Navbar} from './Navbar.js';
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
    children: [
      Navbar(navigations)
    ]
  });
};