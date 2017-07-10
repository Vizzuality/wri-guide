/**
 * Main file:
 * In this we are going to initialize all modules
 */

import Header from './js/modules/header';

//import CSS
import './styles/global.scss';

const init = () => {

  document.body.style.paddingTop = '35px'; // padding for force space for header

  // Adding header
  new Header();

  var topbarWri = document.getElementById('WRI-showHeader');
  topbarWri.addEventListener("click", displayHeader);

  var overlay = document.createElement('div');
  overlay.id = 'wri-fuckawesome-overlay';
  overlay.className = 'wri-hideOverlay-omg';
  document.body.appendChild(overlay);
}

if(!!document.readyState && (document.readyState === "complete" || document.readyState === "interactive")) {
	init();
} else {
	document.addEventListener('DOMContentLoaded', init);
}


function displayHeader(){
  var headerWri = document.getElementsByClassName('wri-menu-container');
  var overlay = document.getElementById('wri-fuckawesome-overlay');

  if(window.screen.availWidth > 991){
    if(headerWri[0].id === 'wri-hideHeader-omg' && overlay.className === 'wri-hideOverlay-omg'){
       headerWri[0].id = 'wri-showHeader-omg';
       overlay.className = 'wri-showOverlay-omg';
       document.body.className = 'wri-overflow-header';
    }else{
      headerWri[0].id = 'wri-hideHeader-omg';
      overlay.className = 'wri-hideOverlay-omg';
      document.body.className = 'no-wri-overflow-header';
    }
  }else{
    window.open('http://www.wri.org/','_blank');
  }
}
