export * from './type'
import { styles } from './button.css.ts'
import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js';

@customElement('web-button')
export class WebButton extends LitElement {
  static styles = styles
  static shadowRootOptions: ShadowRootInit = { mode: 'closed' }

  @property({ type: String }) color = '';
  @property({ type: String }) size = '';

  private get classes() {
    return classMap({
      [this.color]: Boolean(this.color),
      [this.size]: Boolean(this.size)
    })
  }

  protected render() {
    return html`
      <button class=${this.classes}>
        <slot></slot>
      </button> 
    `;
  }
}
