# WRI Guide

This repo provides the header shared by all WRI websites.

![Header in action](app/images/preview.jpg?raw=true)

## Installation

Requirements:

* NodeJs 5.2+ [How to install](https://nodejs.org/download/)
* Ruby 2+ [How to install](https://gorails.com/setup/osx/10.10-yosemite)

Install project dependencies:

	npm install

## Usage (development)

To see in development mode run and follow terminal instructions:

	npm start

[Go to dev url enviroment](http://http://0.0.0.0:9090/app/) for see the demo app in action.

## How to use (in sites)

Add this snippet your site:

```js
(function(){
  var element = document.createElement('div'),
    scriptTag = document.createElement('script');
  element.id = 'headerWrI';
  scriptTag.src = 'https://vizzuality.github.io/wri-guide/wri-guide-assets.js';
  document.body.insertBefore(element, document.body.firstChild);
  document.body.appendChild(scriptTag);
})();
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b feature/my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/my-new-feature`
5. Submit a pull request :D
