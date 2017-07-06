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

  var overlay = document.createElement('div');
  overlay.id = 'wri-fuckawesome-overlay';
  document.body.appendChild(overlay);
}

if(!!document.readyState && (document.readyState === "complete" || document.readyState === "interactive")) {
	init();
} else {
	document.addEventListener('DOMContentLoaded', init);
}


function displayHeader(){
  var headerWri = document.getElementsByClassName('wri-menu-container');

  if(window.screen.availWidth > 991){
    if(headerWri[0].style.visibility === 'hidden'){
      headerWri[0].style.visibility = 'visible';
       document.getElementById('wri-fuckawesome-overlay').style.display = 'block';
       document.body.className = 'wri-overflow-header';
       document.body.style.paddingTop = '35px';
    }else{
      headerWri[0].style.visibility = 'hidden';
      document.getElementById('wri-fuckawesome-overlay').style.display = 'none';
      document.body.className = 'no-wri-overflow-header';
    }
  }else{
    window.open('http://www.wri.org/','_blank');
  }
}
