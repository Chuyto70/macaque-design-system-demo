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
      /* USAMOS LOS TOKENS GENERADOS POR STYLE DICTIONARY */
      background-color: var(--brand-primary, #000); 
      color: white;
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      font-weight: 600;
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
      border: 2px solid var(--brand-primary);
      color: var(--brand-primary);
    }
  `;

  render() {
    return html`
      <button class="${this.variant}">
        <slot></slot> </button>
    `;
  }
}