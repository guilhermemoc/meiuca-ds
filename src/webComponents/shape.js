class CustomShape extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  async connectedCallback() {
    try {
      const response = await fetch('design-tokens.json');
      const tokens = await response.json();

      const borderRadius = this.getAttribute('border-radius') || tokens.radius.size.none.value;
      const padding = this.getAttribute('padding') || tokens.spacing.size.lg.value;
      const borderWidth = this.getAttribute('border-width') || tokens.border.size.thin.value;
      const borderColor = this.getAttribute('border-color') || tokens.neutral.color[4].value;
      const backgroundColor = this.getAttribute('background-color') || tokens.neutral.color[5].value;
      this.shadowRoot.innerHTML = `
          <style>
            :host {
              display: block;
            }
  
            div {
              border-radius: ${borderRadius};
              padding: ${padding};
              border: ${borderWidth} solid ${borderColor};
              background-color: ${backgroundColor};
            }
          </style>
          <div><slot></slot></div>
        `;
    } catch (error) {
      console.error('Erro ao carregar os design tokens:', error);
    }
  }
}

customElements.define('custom-shape', CustomShape);
