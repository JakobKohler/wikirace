import ReactHtmlParser from 'react-html-parser';
import React from 'react';
import ReactDOM from 'react-dom';

export default class HtmlEmbedWebComponent extends HTMLElement {
    connectedCallback() {
        const mountPoint = document.createElement('html');
        this.attachShadow({mode: 'open'}).appendChild(mountPoint);
        this.shadowRoot.addEventListener( 'click', this.handleClick);
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
        }else if (ev.target.parentNode.classList.contains('scrollLink') || ev.target.classList.contains('scrollLink')){
            let targetId = ev.target.getAttribute('scroll-link') || ev.target.parentNode.getAttribute('scroll-link');
            ev.target.dispatchEvent(new CustomEvent('scrollClick', {
                bubbles: true,
                composed: true,
                detail: targetId
            }));
        }
    }
}
customElements.define('html-embed', HtmlEmbedWebComponent);
