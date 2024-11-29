import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('hello-world')
export class HelloWorld extends LitElement {
  @property()
  name = '';

  @state()
  count = 0;

  handleClick() {
    this.count++;
  }

  render() {
    return html`
      <div>hello ${this.name}</div>
      <button @click=${this.handleClick} >count: ${this.count}</button>
    `;
  }
}

