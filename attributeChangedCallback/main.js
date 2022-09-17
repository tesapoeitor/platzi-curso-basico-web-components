
class myElement extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    static get observedAttributes() {
        return ["titulo", "parrafo", "img"]
    }

    attributeChangedCallback(attr, oldVal, newVal) {
        if(attr === "titulo")
            this.titulo = newVal
        else if(attr === "parrafo")
            this.parrafo = newVal
        else if(attr === "img")
            this.img = newVal
    }

    getTemplate() {
        const template = document.createElement("template")
        template.innerHTML = `
            <h2>${this.titulo}</h2>
            <div>
                <p>${this.parrafo}</p>
                <img src="${this.img}">
            </div>
            ${this.getStyles()}
        ` 

        return template
    }

    getStyles() {
        return `
        <style>
            h2 {
                color: green;
            }
        </style>
        `
    }

    render() {
        // this.appendChild(this.getTemplate().content.cloneNode(true))
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
    }

    connectedCallback() {
        this.render()
    }
}

customElements.define("my-element", myElement)