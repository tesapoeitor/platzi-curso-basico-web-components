const template = document.createElement("div")
template.innerHTML = `
    <style>
        .texto {
            color: red;
        }
        p {
            color: blue;
        }
    </style>

    <p class="texto">Hola mundo</p>
    <p>Hola mundo</p>
`

class myElement extends HTMLElement {
    constructor() {
        super()
        this.p = document.createElement("p")
    }

    connectedCallback() {
        this.p.textContent = "Hola mundo"
        this.append(this.p, template)
    }
}

customElements.define("my-element", myElement)