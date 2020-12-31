import React, {Component} from 'react';
import axios from 'axios';

export default class ranRace extends Component{
    constructor(props) {
        super(props);

        this.state = {
            startSearchResults: [],
            targetSearchResults: [],
            selectedStart: '',
            selectedTarget: '',
        }

        this.handleArticleClick = this.handleArticleClick.bind(this);
    }

    onChangeInput(ev, list){
        let searchTerm;
        ev.target.value ? searchTerm = ev.target.value: searchTerm = '%20'

        axios.get('http://localhost:5000/searchArticle/' + searchTerm)
            .then(res => {
                if (list === "start"){
                    this.setState({
                        startSearchResults: res.data
                    });
                }else if (list === "target"){
                    this.setState({
                        targetSearchResults: res.data
                    });
                }
            });

    }

    handleArticleClick(event){
        let prevSelected = event.target.parentNode.getElementsByClassName('selectedArticle');
        for (let i = 0; i < prevSelected.length; i++){
            prevSelected.item(i).classList.remove('selectedArticle');
        }
        let element = event.target;
        element.classList.add('selectedArticle');

        if (element.getAttribute('data-article-list') === 'start'){
            this.setState({
                selectedStart: element.innerText,
            });
        }else if(element.getAttribute('data-article-list') === 'target'){
            this.setState({
                selectedTarget: element.innerText,
            });
        }
    }
    checkRedirects(article, targetArticle, callbackFunction){
        console.log(article, targetArticle);
        axios.get('http://localhost:5000/getRedirects/' + encodeURI(article))
            .then(apires => {
                axios.get('http://localhost:5000/getRedirects/' + encodeURIComponent(decodeURIComponent(targetArticle)))
                    .then(targetRes => {
                        callbackFunction(!(Boolean(apires.data.includes(targetArticle) ||targetRes.data.includes(article) || Boolean(apires.data.some(item => targetRes.data.includes(item))))));
                        return !(Boolean(apires.data.includes(targetArticle) ||targetRes.data.includes(article) || Boolean(apires.data.some(item => targetRes.data.includes(item)))));
                    });
            });
        return true;
    }
    handleStartClick() {
        this.checkRedirects(this.state.selectedStart, this.state.selectedTarget, (res) => this.checkBoolRedirect(res))
    }
    checkBoolRedirect(res){
        if (res) window.location = `/race?start=${this.state.selectedStart}&target=${this.state.selectedTarget}`;
    }


    render() {
        let start = this.state.selectedStart;
        let target = this.state.selectedTarget;
        let enableStart = Boolean(start) && Boolean(target) && start !== target;
        return(
            <div className="wrapper">
                <h2 className="titleSub">Custom Race</h2>
                <main className="selectionBody">
                    <div className="articleColumn">
                        <p className="columnTitle">START</p>
                        <div className="list">
                            <input type="text" className="searchBar" placeholder="SUCHE" onChange={(e) => {this.onChangeInput(e, 'start')}}/>
                                <div className="searchResults">
                                    {
                                        this.state.startSearchResults.map(art => {
                                            return <p className="articleItem" key={art} title={art} data-article-list="start" onClick={this.handleArticleClick}>{art}</p>
                                        })
                                    }
                                </div>
                        </div>
                    </div>
                    <div className="arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path
                                d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"/>
                        </svg>
                    </div>
                    <div className="articleColumn">
                        <p className="columnTitle">ZIEL</p>
                        <div className="list">
                            <input type="text" className="searchBar" placeholder="SUCHE" onChange={(e) => {this.onChangeInput(e, 'target')}}/>
                                <div className="searchResults">
                                    {
                                        this.state.targetSearchResults.map(art => {
                                            return <p className="articleItem" key={art} title={art} data-article-list="target" onClick={this.handleArticleClick}>{art}</p>
                                        })
                                    }
                                </div>
                        </div>
                    </div>
                </main>
                {enableStart ? <button className="btn startBtn" onClick={() => this.handleStartClick()}>START</button> : null}
            </div>
        );
    }
}
/*TODO fix input validation (check on submit)*/