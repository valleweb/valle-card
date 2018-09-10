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
          --valle-card-margin: 16px;
          --total-margin: calc(var(--valle-card-margin) * 2);
          background-color: var(--valle-card-bg-color, #fff);
          border-radius: 4px;
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                      0 1px 5px 0 rgba(0, 0, 0, 0.12),
                      0 3px 1px -2px rgba(0, 0, 0, 0.2);
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          margin: var(--valle-card-margin);
          max-width: var(--valle-card-width, 400px);
          padding: var(--valle-card-padding, 16px);
          position: relative;
          width: calc(100% - var(--total-margin));
        }
      </style>
      <slot></slot>
    `;
  }
}

window.customElements.define('valle-card', ValleCard);
