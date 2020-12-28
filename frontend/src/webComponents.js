class htmlPage extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({mode: 'open'})

    }
    set htmlContents(htmlCode){
        this.root.innerHTML = '<style>#content{margin: 0}</style>' + htmlCode;
    }
}

customElements.define('html-page', htmlPage);
