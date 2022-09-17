
class myElement extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    getTemplate() {
        const template = document.createElement("template")
        template.innerHTML = `
            <h2>
                <slot name="title"></slot>
            </h2>
            <div>
                <p>
                    <slot name="body"></slot>
                </p>
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