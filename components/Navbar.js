import {CreateElement} from './Utils/CreateElement.js';
export const Navbar = (navigations) => {

  

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