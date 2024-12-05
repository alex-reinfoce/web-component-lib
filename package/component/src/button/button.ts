import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

interface WebButtonProps {
  label: string
}

@customElement('web-button')
export class WebButton extends LitElement {
  @property() label: string = 'click me'

  render() {
    return html`
      <button>
        ${this.label}
      </button>
    `;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'web-button': WebButtonProps;
    }
  }
}
