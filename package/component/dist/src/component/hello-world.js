import { __decorate } from "tslib";
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
let HelloWorld = class HelloWorld extends LitElement {
    render() {
        return html `
      <div>hello world</div>
    `;
    }
};
HelloWorld = __decorate([
    customElement('hello-world')
], HelloWorld);
export { HelloWorld };
//# sourceMappingURL=hello-world.js.map