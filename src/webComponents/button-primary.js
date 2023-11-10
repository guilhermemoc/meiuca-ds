class ButtonPrimary extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  async connectedCallback() {
    try {
      const response = await fetch('./design-tokens.json');
      const tokens = await response.json();
      const fontSize = this.getAttribute('font-size') || tokens.font.size.xxs.value;
      const lineHeight = this.getAttribute('line-height') || tokens.line.height.tight.value;
      const borderRadius = this.getAttribute('border-radius') || tokens.radius.size.none.value;
      const padding = this.getAttribute('padding') || `${tokens.spacing_squish.size.quarck.v.value} ${tokens.spacing_squish.size.quarck.h.value}`;
      const fontFamily = this.getAttribute('font-family') || tokens.font.family.highlight.value;
      const fontWeight = this.getAttribute('font-weight') || tokens.font.weight.medium.value;
      const color = this.getAttribute('color') || tokens.neutral.color[5].value;
      const bgColor = this.getAttribute('bg-color') || tokens.brand.color.primary[3].value;

      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: inline-block;
          }

          button {
            font-size: ${fontSize};
            line-height: ${lineHeight};
            border-radius: ${borderRadius};
            padding: ${padding};
            font-family: ${fontFamily};
            font-weight: ${fontWeight};
            color: ${color};
            background-color: ${bgColor};
            border: ${tokens.border.size.hairline.value} solid ${bgColor};
            cursor: pointer;
            transition: background-color 0.2s;
          }

          button:hover {
            background-color: ${tokens.brand.color.primary[2].value};
          }
        </style>
        <button><slot></slot></button>
      `;
    } catch (error) {
      console.error('Erro ao carregar os design tokens:', error);
    }
  }
}

customElements.define('button-primary', ButtonPrimary);
