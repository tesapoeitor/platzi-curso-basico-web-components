
class myElement extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
        
        this.title = this.getAttribute("titulo")
        this.parrafo = this.getAttribute("parrafo")
        this.img = this.getAttribute("img")
    }

    getTemplate() {
        const template = document.createElement("template")
        template.innerHTML = `
            <h2>${this.title}</h2>
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