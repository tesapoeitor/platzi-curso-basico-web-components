
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
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            :host {
                background-color: grey;
                display: inline-block;
                min-width: 300px;
                max-width: 500px;
            }

            :host([yellow]) {
                background-color: yellow;
            }

            :host([yellow]) h1 {
                color: red;
            }

            :host([yellow]) p {
                color: green;
            }

            :host-context(article.card) {
                background-color: green;
                display: block;
                min-width: 100%
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