class mydiv extends HTMLElement {
    constructor() {

        super(); //herda as propriedades do pai
        this.attachShadow({ mode: 'open' }); //permite edição no css
    }
    static get observedAttributes() {
        return ['altura', 'largura', 'cor']
    }

    //verifica a mudança
    attributeChangedCallback(nome, ValorA, ValorB) {
        if (ValorA !== ValorB) {
            this.render();
        }
    }
    //renderizar quando o cmp é criado
    connectedCallback() {
        this.render();
    }


    //o estilo do comp em si
    render() {

        const altura = this.getAttribute('altura') || '10px'
        const largura = this.getAttribute('largura') || '10px'
        const cor = this.getAttribute('cor') || 'red'

        this.shadowRoot.innerHTML = `
                <div style="
                    background-color: ${cor};
                    height: ${altura};
                    width: ${largura};">
                    22
                </div>
        `;//codigo html e css
    }

}



customElements.define('my-div', mydiv) //joga o elemento