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

  var topbarWri = document.getElementById('WRI-showHeader');
  topbarWri.addEventListener("click", displayHeader);
}

if(!!document.readyState && (document.readyState === "complete" || document.readyState === "interactive")) {
	init();
} else {
	document.addEventListener('DOMContentLoaded', init);
}


function displayHeader(){
  var headerWri = document.getElementsByClassName('wri-menu-container');
  console.log(window.screen.width);
  if(window.screen.availWidth > 991){
    if(headerWri[0].style.visibility === 'hidden'){
      headerWri[0].style.visibility = 'visible';
      document.body.className = 'overlay';
    }else{
      headerWri[0].style.visibility = 'hidden';
      document.body.className = 'no-overlay';
    }
  }else{
    window.open('http://www.wri.org/','_blank');
  }
}
