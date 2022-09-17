class MyElement extends HTMLElement {
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
                :host {
                    display: inline-block;
                }

                ::slotted(.text) {
                    color: red;
                }
            </style>
        `
    }

    render() {
        this.shadowRoot.append(this.getTemplate().content.cloneNode(true))
    }

    connectedCallback() {
        this.render()
    }
}

customElements.define("my-element", MyElement)