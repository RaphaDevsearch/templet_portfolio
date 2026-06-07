import {CreateElement} from './Utils/CreateElement.js';
export const Navbar = () => {

  const navigations = [
    { 
      name: 'Home', 
      href: '#' 
    },
    { 
      name: 'About', 
      href: '#' 
    },
    { 
      name: 'Contact', 
      href: '#' 
    }
  ];

  return CreateElement('nav', {
    children: navigations.map(nav => 
      CreateElement('a', {
        textContent: nav.name,
        othersAttributes: {
          href: nav.href
        }
      })
    )
  });
}