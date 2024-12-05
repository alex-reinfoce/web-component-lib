import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'

/**
 * web-button
 */
@customElement('web-button')
export class WebButton extends LitElement {
  render() {
    return html`
      <button>
        click me
      </button>
    `;
  }
}

