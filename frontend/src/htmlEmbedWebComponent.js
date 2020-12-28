import ReactHtmlParser/*, { processNodes, convertNodeToElement, htmlparser2 }*/ from 'react-html-parser';
import React from 'react';
import ReactDOM from 'react-dom';

export default class HtmlEmbedWebComponent extends HTMLElement {
    connectedCallback() {
        const mountPoint = document.createElement('div');
        this.attachShadow({mode: 'open'}).appendChild(mountPoint);
        this.shadowRoot.addEventListener( 'click', this.handleClick)
        const htmlContent = this.getAttribute('htmlContent');
        ReactDOM.render(ReactHtmlParser(htmlContent), mountPoint);

    }
    handleClick(ev){
        if (ev.target.classList.contains('interWikiLink')){
            ev.target.dispatchEvent(new CustomEvent('interLinkClick', {
                bubbles: true,
                composed: true,
                detail: ev.target.getAttribute("inter-link")
            }));
        }
    }
}
customElements.define('html-embed', HtmlEmbedWebComponent);