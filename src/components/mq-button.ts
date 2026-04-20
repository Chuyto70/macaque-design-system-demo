import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('mq-button')
export class MqButton extends LitElement {
  // Definimos propiedades para que el botón sea dinámico
  @property({ type: String }) variant = 'primary';

  static readonly styles = css`
    :host {
      display: inline-block;
    }

    button {
      /* Los botones reaccionan a los tokens globales publicados desde Figma. */
      background-color: var(--global-brand-primary, #000);
      color: white;
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      font-size: calc(var(--global-text-lg, 16) * 1px);
      cursor: pointer;
      transition: opacity 0.2s ease;
      font-family: sans-serif;
    }

    button:hover {
      opacity: 0.8;
    }

    /* Ejemplo de cómo usar otro token para una variante */
    .secondary {
      background-color: transparent;
      border: 2px solid var(--global-brand-secondary, #666);
      color: var(--global-brand-secondary, #666);
    }
  `;

  render() {
    return html`
      <button class="${this.variant}">
        <slot></slot> </button>
    `;
  }
}
