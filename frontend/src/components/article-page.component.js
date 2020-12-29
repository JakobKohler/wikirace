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

class WinPopup extends Component{
    render() {
        return(
            <div className="winPopup">
                <div className="winPopupContent">
                    <div onClick={() => this.props.removeWin()}>
                        <svg className='closeBtn' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg>
                    </div>
                    <h2 className='winTitle'>Ziel erreicht!</h2>
                    <div className='winArticleContainer'>
                        <p className='winArticles'>
                            {this.props.stats.startArticle}
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"/></svg>
                        <p className='winArticles'>
                            {this.props.stats.targetArticle}
                        </p>
                    </div>
                    <div className='winStats'>
                        <div className='winClicks winStatsItem'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 352a160 160 0 0 0 160 160h64a160 160 0 0 0 160-160V224H0zM176 0h-16A160 160 0 0 0 0 160v32h176zm48 0h-16v192h176v-32A160 160 0 0 0 224 0z"/></svg>
                            <p><span>{this.props.stats.clickCounter}</span> Klicks</p>
                        </div>
                        <div className='winTime winStatsItem'>
                            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800"><path d="M797.69,354.75a402.93,402.93,0,0,0-19.51-86.08,397.37,397.37,0,0,0-57.11-108,412.93,412.93,0,0,0-60.35-65,403.33,403.33,0,0,0-88-58.14A384.46,384.46,0,0,0,481.47,6.26c-10.31-2.13-20.66-4.12-31.26-4.67-9.84-.52-19.72-.49-29.53-1.59h-43.8c-4.62.76-9.3.71-14,.89-12.72.5-25.39,1.24-38,3.68C292.9,10.83,261.9,20.35,232.3,34.22a401.78,401.78,0,0,0-59,33.45,422.16,422.16,0,0,0-64.91,55.61,397.15,397.15,0,0,0-42.81,53.17c-23.89,35.76-42.06,74.24-53.29,115.84-5,18.47-9.38,37-10.6,56.29-.62,9.73-.47,19.5-1.66,29.19v43.8c1,3.84.73,7.84.78,11.69a262.94,262.94,0,0,0,7.47,56.95A396.18,396.18,0,0,0,55.64,605.75a403.75,403.75,0,0,0,259,185.44,360.61,360.61,0,0,0,63.62,8.37A428.93,428.93,0,0,0,427,799a412.26,412.26,0,0,0,52.79-7.1,404.8,404.8,0,0,0,190.61-98.28A403.27,403.27,0,0,0,777.26,532.09a386.6,386.6,0,0,0,21.8-106.37C800.48,402,800.42,378.33,797.69,354.75ZM398.3,718.07C223,717.32,79.48,573.72,79.81,399.15,80.15,222.57,223.69,79.52,399.31,79.9c176.13.38,319.46,144.57,318.78,319.49C717.41,575.18,573.27,718.82,398.3,718.07Z"/><path d="M418.86,303.7c0,33,0,66-.07,99,0,3.11.94,4.82,3.66,6.44q86,51.42,171.92,103c3.12,1.87,3.78,3.16,1.69,6.46q-14,22.14-27.48,44.62c-1.67,2.76-2.86,2.93-5.56,1.26Q463,502.77,362.87,441.31c-3-1.83-4-3.84-4-7.29q.15-114.49,0-229c0-4.4,1.13-5.62,5.55-5.55,16.57.26,33.15.22,49.72,0,3.78,0,4.81,1,4.79,4.78C418.79,237.4,418.86,270.55,418.86,303.7Z"/></svg>
                            <p><span>{this.props.secondsToTime(this.props.stats.currentTime)}</span> Minuten</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

/*Add Win Screen*/
/*Add functionality for ID HREFs*/

class WebWrapper extends Component{
    constructor(props) {
        super(props);
        this.editDOM = this.editDOM.bind(this);
    }
    componentDidMount() {
        document.querySelector('html-embed').addEventListener('scrollClick', (ev => this.props.scrollToId(ev.detail)));
        if (!this.props.deactivateListener){
            document.querySelector('html-embed').addEventListener('interLinkClick', (ev) => this.props.changeWikiPage(ev.detail));
        }
    }
    componentWillUnmount() {
        document.querySelector('html-embed').removeEventListener('interLinkClick', this.props.changeWikiPage);
    }

    editDOM(htmlString) {
        let initialDom = new DOMParser().parseFromString(htmlString, 'text/html');
        let newDocWrapper = new DOMParser().parseFromString('<html lang="en"> <head> <title>iFrame Wikipedia</title><style>body{overflow-y: visible !important;} #content{margin-left: 0; overflow-x: hidden}a:link, a:visited, a {color: #0645ad !important;} a.external, a:not(.clickableLink){text-decoration: line-through !important; color: #4a4a4a !important;}</style></head> <body> </body></html>', 'text/html');
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
            newDocWrapper.head.innerHTML += curLink.outerHTML;
            return newHref;
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
        return resultWrapperDiv.innerHTML;
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
            finished: false,
            showWinPopup: false,
            previewToggle: false
        }
        this.changeWikiPage = this.changeWikiPage.bind(this);
        this.removeWin = this.removeWin.bind(this);
        this.previewTarget = this.previewTarget.bind(this);
    }

    componentDidMount() {
        let queryParams = this.props.location.search.substring(1);
        let decodedParams = JSON.parse('{"' + decodeURI(queryParams).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}');
        this.setState({
            startArticle: decodedParams.start,
            targetArticle: decodedParams.target,
            currentArticle: decodedParams.start,
            loading: true,
            trace: [...this.state.trace, decodedParams.start]
        });
        axios.get('http://localhost:5000/wikiArticle/'+ encodeURIComponent(decodedParams.start))
            .then((res) => {
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
        this.setState(prevState => {
            return {
                loading: true,
                clickCounter: prevState.clickCounter + 1,
                finished: decodedLink === this.state.targetArticle
            };
        });
        axios.get('http://localhost:5000/wikiArticle/'+ encodeURIComponent(link))
            .then((res) => {
                console.log('Done fetching');
                this.setState({
                    wikipediaJSX: res.data,
                    loading: false,
                    currentArticle: decodedLink,
                    trace: [decodedLink, ...this.state.trace],
                    showWinPopup: decodedLink === this.state.targetArticle
                });
                this.state.finished ? this.displayWin() : this.startTimer();
            });
    }
    displayWin(){
        console.log('WIN');
    }
    removeWin(){
        this.setState({
            showWinPopup: false
        });
    }
    startTimer(){
        this.timer = setInterval(() => {
            this.setState(prevState => {
                return {
                    currentTime: prevState.currentTime + 1
                };
            });
        },1000)
    }
    stopTimer(){
        clearInterval(this.timer);
    }
    secondsToTime(sec){
        let seconds = sec % 60;
        let minutes = Math.floor(sec / 60)
        return `${minutes}:${seconds.toString().length > 1 ? seconds: '0'  + seconds}`
    }
    previewTarget(){
        let targetArticle = this.state.previewToggle ? this.state.currentArticle : this.state.targetArticle;
        this.setState({
            loading: true,
            previewToggle: !this.state.previewToggle
        });
        axios.get('http://localhost:5000/wikiArticle/' + targetArticle)
            .then((res) => {
                this.setState({
                    loading: false,
                    wikipediaJSX: res.data
                });
            });
    }
    scrollToId(targetId){
        let embedWrapper = document.querySelector('html-embed');
        embedWrapper.shadowRoot.getElementById(targetId.substr(1)).scrollIntoView({behavior: "smooth"})
    }
    render() {
        const {wikipediaJSX, loading, showWinPopup} = this.state;
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
                        <p className="articleTitle">ZIEL
                            <svg onClick={this.previewTarget} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"/></svg></p>
                        <h2 className="articleName" id='targetDisplay'>{this.state.targetArticle}</h2>
                    </div>
                </div>
                <div className="wikipediaContent" id="wiki">
                    {loading ? <LoadingComponent />: <WebWrapper htmlCode={wikipediaJSX} changeWikiPage={this.changeWikiPage} deactivateListener={this.state.finished || this.state.previewToggle} scrollToId={this.scrollToId}/>}
                    {showWinPopup ? <WinPopup removeWin={this.removeWin} stats={this.state} secondsToTime={this.secondsToTime}/> : null}
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
                    <div className='cancelBtn'>
                        <button onClick={() => {window.location = '/'}}>Aufgeben</button>
                    </div>
                </div>
            </div>
        );
    }
}
/*refactor article fetching*/