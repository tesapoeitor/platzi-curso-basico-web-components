
class myElement extends HTMLElement {
    constructor() {
        super()
    }

    getTemplate() {
        const template = document.createElement("template")
        template.innerHTML = `
            <h2>Hola soy un titulo</h2>
            <div>
                <p>Hola soy un texto de ejemplo</p>
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
        this.appendChild(this.getTemplate().content.cloneNode(true))
    }

    connectedCallback() {
        this.render()
    }
}

customElements.define("my-element", myElement)