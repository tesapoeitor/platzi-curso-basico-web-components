class MyCustomElement extends HTMLElement {
    constructor() {
        super()
        console.log("Hola desde el constructor")
    }

    connectedCallback() {
        console.log("Hola desde el DOM")
        
        const p = document.createElement("p")
        p.innerText = "Desaparezco en 3 segundos"
        this.append(p)
    }

    disconnectedCallback() {
        console.log("Adios del DOM")
    }
}

customElements.define("my-custom-element", MyCustomElement)

setTimeout(() => {
    document.querySelector("my-custom-element").remove()
}, 3000);