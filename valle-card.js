import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `valle-card`
 * Awesome valle card - Web Component using Polymer 3x
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class ValleCard extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'valle-card',
      },
    };
  }
}

window.customElements.define('valle-card', ValleCard);
