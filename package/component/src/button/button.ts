export * from './type'

import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'



@customElement('web-button')
export class WebButton extends LitElement {
  @property({ type: String }) label = 'click me'

  render() {
    return html`
      <button>
        ${this.label}
      </button>
    `;
  }
}

