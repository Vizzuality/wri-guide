
import headerTpl from './header.tpl';

class Header{
  constructor() {
    this.el = document.getElementById('headerWrI');
    if (!this.el) {
      throw new Error('element #headerWrI doesn\'t exist');
    }
    this.render();
  }

  render() {
    this.el.innerHTML = headerTpl();
    return this;
  }
}

export default Header;
