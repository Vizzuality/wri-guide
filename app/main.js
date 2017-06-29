/**
 * Main file:
 * In this we are going to initialize all modules
 */

import Header from './js/modules/header';

//import CSS
import './styles/global.scss';

const init = () => {
  // Adding header
  new Header();
}

if(!!document.readyState && (document.readyState === "complete" || document.readyState === "interactive")) {
	init();
} else {
	document.addEventListener('DOMContentLoaded', init);
}
