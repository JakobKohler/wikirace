import React, {Component} from 'react';
import HtmlEmbedWebComponent from "../htmlEmbedWebComponent";
import axios from 'axios';

class LoadingComponent extends Component{
    render() {
        return (
            <div className="loadingContainer">
                <div className="loader">
                    Loading...
                </div>
            </div>
        );
    }
}

/*Make a function to change current Article based on custom click event.detail*/
/*Add functionality for ID HREFs*/

class WebWrapper extends Component{
    constructor(props) {
        super(props);
        this.editDOM = this.editDOM.bind(this);
    }
    componentDidMount() {
        if (!this.props.finished){
            document.querySelector('html-embed').addEventListener('interLinkClick', (ev) => this.props.changeWikiPage(ev.detail));
        }
    }
    componentWillUnmount() {
        document.querySelector('html-embed').removeEventListener('interLinkClick', this.props.changeWikiPage);
    }

    editDOM(htmlString) {
        let initialDom = new DOMParser().parseFromString(htmlString, 'text/html');
        let newDocWrapper = new DOMParser().parseFromString('<html lang="en"> <head> <title>iFrame Wikipedia</title><style>body{overflow-y: visible !important;} #content{margin-left: 0}a:link, a:visited, a {color: #0645ad !important;} a.external, a:not(.clickableLink){text-decoration: line-through !important; color: #4a4a4a !important;}</style></head> <body> </body></html>', 'text/html');
        let contentDiv = initialDom.getElementById('content');
        newDocWrapper.querySelector('body').appendChild(contentDiv);

        let cssLinks = initialDom.querySelectorAll('link[rel=stylesheet]');
        let linkArr = [];
        for (let i = 0; i < Object.keys(cssLinks).length; i++) {
            linkArr.push(cssLinks[i])
        }
        linkArr.map( curLink => {
            let currentHref = curLink.getAttribute('href');
            let newHref = `https://de.wikipedia.org${currentHref}`;
            curLink.setAttribute('href', newHref);
            newDocWrapper.head.innerHTML += curLink.outerHTML
        });
        let anchors = contentDiv.querySelectorAll('a[href], area[href]');
        for (let i = 0; i < anchors.length; i++) {
            let currentAnchor = anchors[i];
            const hrefVal = currentAnchor.getAttribute('href');
            currentAnchor.href = '#';
            if (hrefVal.includes('/wiki/')){
                currentAnchor.setAttribute('inter-link', hrefVal);
                currentAnchor.setAttribute('class', 'interWikiLink clickableLink');
            }else if (hrefVal.charAt(0) === '#'){
                currentAnchor.setAttribute('scroll-link', hrefVal);
                currentAnchor.setAttribute('class', 'scrollLink clickableLink');
            }
        }

        let resultWrapperDiv = document.createElement('html');
        resultWrapperDiv.appendChild(newDocWrapper.head);
        resultWrapperDiv.appendChild(newDocWrapper.body);

        return resultWrapperDiv.outerHTML;
    }

    render() {
        let htmlProps = this.editDOM(this.props.htmlCode);

        return(
            <html-embed htmlContent={htmlProps}> </html-embed>
        );
    }
}



export default class raceInterface extends Component{
    constructor(props) {
        super(props);

        this.state = {
            startArticle: '',
            targetArticle: '',
            wikipediaJSX: '',
            currentArticle: '',
            loading: true,
            clickCounter: 0,
            currentTime: 0,
            trace: [],
            finished: false
        }
        this.changeWikiPage = this.changeWikiPage.bind(this);
    }

    componentDidMount() {
        let queryParams = this.props.location.search.substring(1);
        console.log(queryParams);
        let decodedParams = JSON.parse('{"' + decodeURI(queryParams).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}');
        this.setState({
            startArticle: decodedParams.start,
            targetArticle: decodedParams.target,
            loading: true,
            trace: [...this.state.trace, decodedParams.start]
        });
        axios.get('http://localhost:5000/wikiArticle/'+ encodeURI(decodedParams.start))
            .then((res) => {
                console.log('Done fetching');
                this.startTimer();
                this.setState({
                    wikipediaJSX: res.data,
                    loading: false,
                });
            });
    }
    changeWikiPage(str){
        const linkRegex = /(?<=\/wiki\/).*/g;
        let link = str.match(linkRegex)[0];
        let decodedLink = decodeURI(link).replace(/_/g, ' ');
        this.stopTimer();
        this.setState({
            loading: true,
            clickCounter: this.state.clickCounter += 1,
            finished: decodedLink === this.state.targetArticle
        });
        axios.get('http://localhost:5000/wikiArticle/'+ link)
            .then((res) => {
                console.log('Done fetching');
                this.setState({
                    wikipediaJSX: res.data,
                    loading: false,
                    trace: [decodedLink, ...this.state.trace]
                });
                this.state.finished ? this.displayWin() : this.startTimer();
            });
    }
    displayWin(){
        console.log('WIN');
    }
    startTimer(){
        this.timer = setInterval(() => {
            this.setState({
                currentTime: this.state.currentTime += 1
            });
        },1000)
    }
    stopTimer(){
        clearInterval(this.timer);
    }
    secondsToTime(sec){
        let seconds = sec % 60;
        let minutes = Math.floor(sec / 60)
        return `${minutes}:${seconds.toString().length > 1 ? seconds: '0'+seconds}`
    }
    render() {
        const {wikipediaJSX, loading} = this.state;
        return(
            <div className="wrapperMainArticle">
                <div className="leftColumn">
                    <div className="startContainer" lang='de'>
                        <p className="articleTitle">START</p>
                        <h2 className="articleName" id='startDisplay'>{this.state.startArticle}</h2>
                    </div>
                    <div className="dashedArrow">
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 1000">
                            <path
                                d="M45.51,998.17a6.23,6.23,0,0,0,8.8,0L94,958.68a6.22,6.22,0,0,0-8.78-8.81L49.94,985,14.82,949.72A6.22,6.22,0,0,0,6,958.5Z"/>
                            <rect x="31.42" y="14.24" width="40.9" height="12.44"
                                  transform="translate(31.31 72.29) rotate(-89.89)"/>
                            <rect x="31.3" y="75.59" width="40.9" height="12.44"
                                  transform="translate(-30.17 133.4) rotate(-89.89)"/>
                            <rect x="31.18" y="136.94" width="40.9" height="12.44"
                                  transform="translate(-91.64 194.51) rotate(-89.89)"/>
                            <rect x="31.06" y="198.29" width="40.9" height="12.44"
                                  transform="matrix(0, -1, 1, 0, -153.11, 255.62)"/>
                            <rect x="30.93" y="259.64" width="40.9" height="12.44"
                                  transform="translate(-214.58 316.72) rotate(-89.89)"/>
                            <rect x="30.81" y="321" width="40.9" height="12.44"
                                  transform="matrix(0, -1, 1, 0, -276.05, 377.83)"/>
                            <rect x="30.69" y="382.35" width="40.9" height="12.44"
                                  transform="translate(-337.53 438.93) rotate(-89.89)"/>
                            <rect x="30.57" y="443.7" width="40.9" height="12.44"
                                  transform="matrix(0, -1, 1, 0, -399, 500.04)"/>
                            <rect x="30.45" y="505.05" width="40.9" height="12.44"
                                  transform="translate(-460.47 561.15) rotate(-89.89)"/>
                            <rect x="30.33" y="566.4" width="40.9" height="12.44"
                                  transform="translate(-521.94 622.26) rotate(-89.89)"/>
                            <rect x="30.2" y="627.75" width="40.9" height="12.44"
                                  transform="translate(-583.42 683.36) rotate(-89.89)"/>
                            <rect x="30.08" y="689.1" width="40.9" height="12.44"
                                  transform="translate(-644.89 744.47) rotate(-89.89)"/>
                            <rect x="29.96" y="750.45" width="40.9" height="12.44"
                                  transform="translate(-706.36 805.58) rotate(-89.89)"/>
                            <rect x="29.84" y="811.8" width="40.9" height="12.44"
                                  transform="translate(-767.83 866.68) rotate(-89.89)"/>
                            <rect x="29.72" y="873.15" width="40.9" height="12.44"
                                  transform="translate(-829.3 927.78) rotate(-89.89)"/>
                            <rect x="29.59" y="934.5" width="40.9" height="12.44"
                                  transform="translate(-890.78 988.9) rotate(-89.89)"/>
                        </svg>
                    </div>
                    <div className="startContainer" lang='de'>
                        <p className="articleTitle">ZIEL</p>
                        <h2 className="articleName" id='targetDisplay'>{this.state.targetArticle}</h2>
                    </div>
                </div>
                <div className="wikipediaContent" id="wiki">
                    {loading ? <LoadingComponent />: <WebWrapper htmlCode={wikipediaJSX} changeWikiPage={this.changeWikiPage} finished={this.state.finished}/>}
                </div>
                <div className="rightColumn">
                    <div className="timeContainer">
                        <p className="articleTitle">Zeit</p>
                        <p className="largeCountDisplay">{this.secondsToTime(this.state.currentTime)}</p>
                    </div>
                    <div className="pathContainer">
                        <p className="articleTitle">Weg</p>
                        <div className="itemContainer" lang='de'>
                            {this.state.trace.map((traceItem) => {
                                return <p className='pathItem' key={btoa(traceItem)}> {traceItem} </p>;
                            })}
                        </div>
                    </div>
                    <div className="clickCountContainer">
                        <p className="articleTitle">Geklickte Links</p>
                        <p className="largeCountDisplay">{this.state.clickCounter}</p>
                    </div>
                </div>
            </div>
        );
    }
}