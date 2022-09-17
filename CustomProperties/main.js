class MyElement extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open"})

    }

    getTemplate() {
        const template = document.createElement("template")
        template.innerHTML = `
            <section>
                <h1>
                    <slot name="title"></slot>
                </h1>

                <div>
                    <p>
                        <slot name="body"></slot>
                    </p>
                </div>
            </section>
            ${this.getStyles()}
        `

        return template
    }

    getStyles() {
        return `
            <style>
                :host {
                    --primary-color: tomato;
                    --secondary-color: salmon;
                    --heading-primary: 30px;
                    --heading-secondary: 25px;
                    
                    display: inline-block;
                    min-width: 300px;
                    max-width: 500px
                }

                section {
                    background-color: var(--primary-color);
                }

                h1 {
                    font-size: var(--heading-primary);
                }

                section p {
                    background-color: var(--secondary-color);
                    font-size: var(--heading-secondary);
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