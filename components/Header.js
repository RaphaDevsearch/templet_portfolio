import {
  CreateElement
} from './Utils/CreateElement.js';
import {Navbar} from './Navbar.js';
export const Header = () => {
  return CreateElement('header', {
    children: [
      Navbar()
    ]
  });
};