class CustomSpan extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  async connectedCallback() {
    try {
      const response = await fetch('design-tokens.json');
      const tokens = await response.json();

      const fontSize = this.getAttribute('font-size') || tokens.font.size.lg.value;
      const lineHeight = this.getAttribute('line-height') || tokens.line.height.distant.value;
      const fontFamily = this.getAttribute('font-family') || tokens.font.family.highlight.value;
      const fontWeight = this.getAttribute('font-weight') || tokens.font.weight.bold.value;
      const color = this.getAttribute('color') || tokens.neutral.color[1].value;
      const merginBottom = this.getAttribute('margin-bottom') || tokens.spacing_squish.nano;
      this.shadowRoot.innerHTML = `
          <style>
            :host {
              display: inline-block;
              margin-bottom: ${merginBottom}

            }
  
            span {
              font-size: ${fontSize};
              line-height: ${lineHeight};
              font-family: ${fontFamily};
              font-weight: ${fontWeight};
              color: ${color};
            }
          </style>
          <span><slot></slot></span>
        `;
    } catch (error) {
      console.error('Erro ao carregar os design tokens:', error);
    }
  }
}

customElements.define('heading-small', CustomSpan);
