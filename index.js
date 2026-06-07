import {Header} from './components/Header.js';
import {Main} from './components/Main.js';
import {Footer} from './components/Footer.js';

const app = document.getElementById('app');
app.append(
  Header(),
  Main(),
  Footer()
);