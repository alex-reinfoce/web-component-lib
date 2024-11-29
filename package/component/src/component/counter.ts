import { html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';

@customElement('counter-component')
export class Counter extends LitElement {
  @state()
  count = 0;

  handleClick() {
    this.count++;
  }

  render() {
    return html`
      <button @click=${this.handleClick} >count: ${this.count}</button>
    `;
  }
}

