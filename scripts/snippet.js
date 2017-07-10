(function(){
  var element = document.createElement('div'),
    scriptTag = document.createElement('script');
  element.id = 'headerWrI';
  scriptTag.src = 'https://vizzuality.github.io/wri-guide/wri-guide-assets.js';
  document.body.insertBefore(element, document.body.firstChild);
  document.body.appendChild(scriptTag);
})();
