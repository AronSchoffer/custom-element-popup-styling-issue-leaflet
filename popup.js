export default class MyPopup extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({mode: 'open'});
    const text = document.createElement('p');
    text.textContent = 'my-popup is not red';
    shadow.appendChild(text);
  }
}

customElements.define('my-popup', MyPopup);
