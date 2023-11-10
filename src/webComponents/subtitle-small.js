class SubtitleSmall extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  async connectedCallback() {
    try {
      const response = await fetch('design-tokens.json');
      const tokens = await response.json();

      const fontSize = this.getAttribute('font-size') || tokens.font.size.md.value;
      const lineHeight = this.getAttribute('line-height') || tokens.line.height.medium.value;
      const fontFamily = this.getAttribute('font-family') || tokens.font.family.highlight.value;
      const fontWeight = this.getAttribute('font-weight') || tokens.font.weight.medium.value;
      const color = this.getAttribute('color') || tokens.neutral.color[2].value;
      const merginBottom = this.getAttribute('margin-bottom') || tokens.spacing_squish.nano;
      this.shadowRoot.innerHTML = `
          <style>
            :host {
              display: block;
              margin-bottom: ${merginBottom};
            }
  
            h2 {
              font-size: ${fontSize};
              line-height: ${lineHeight};
              font-family: ${fontFamily};
              font-weight: ${fontWeight};
              color: ${color};
              margin: 0;
            }
          </style>
          <h2><slot></slot></h2>
        `;
    } catch (error) {
      console.error('Erro ao carregar os design tokens:', error);
    }
  }
}

customElements.define('subtitle-small', SubtitleSmall);
