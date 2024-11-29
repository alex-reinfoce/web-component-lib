import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './counter.js';

@customElement('hello-world')
export class HelloWorld extends LitElement {
  static styles = css`
    div {
      display: inline-block;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    @media (prefers-color-scheme: dark) {
      div {
        background-color: #333;
        color: #fff;
      }
    }
  `;

  @property()
  name = '';

  render() {
    return html`
      <div>hello ${this.name}</div>
      <counter-component></counter-component>
    `;
  }
}

