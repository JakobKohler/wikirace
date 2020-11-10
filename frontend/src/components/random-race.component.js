import React, {Component} from 'react';
import axios from 'axios';

export default class ranRace extends Component{
    constructor(props) {
        super(props);

        this.state = {
            startArticles: [],
            targetArticles: [],
            selectedStart: '',
            selectedTarget: ''
        }

        this.refreshArticles = this.refreshArticles.bind(this);
        this.handleArticleClick = this.handleArticleClick.bind(this);
        this.printState = this.printState.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:5000/ranArticle/10')
            .then(res => {
                let clonedRes = [...res.data];
                let starters = clonedRes.splice(0, clonedRes.length / 2);
                let targets = [...clonedRes];
                this.setState({
                    startArticles: starters,
                    targetArticles: targets
                });
            });
    }

    refreshArticles(list){
        axios.get('http://localhost:5000/ranArticle/5')
            .then(res => {
                if(list === "start"){
                    this.setState({
                        startArticles:res.data
                    });
                }else{
                    this.setState({
                        targetArticles: res.data
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
    printState(){
        console.log(this.state);
    }

    render() {
        return(
            <div className="wrapper">
                <h2 className="titleSub">Random Race</h2>
                <main className="selectionBody">
                    <div className="articleColumn">
                        <p className="columnTitle">START</p>
                        <div className="list">
                            {
                                this.state.startArticles.map(art => {
                                    return <p className="articleItem" key={art} title={art} data-article-list="start" onClick={this.handleArticleClick}>{art}</p>
                                })
                            }
                        </div>
                        <div className="refresh">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onClick={() => this.refreshArticles("start")}>
                                <path
                                    d="M500.33 0h-47.41a12 12 0 0 0-12 12.57l4 82.76A247.42 247.42 0 0 0 256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 0 0 166.18-63.91 12 12 0 0 0 .48-17.43l-34-34a12 12 0 0 0-16.38-.55A176 176 0 1 1 402.1 157.8l-101.53-4.87a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12h200.33a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12z"/>
                            </svg>
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
                            {
                                this.state.targetArticles.map(art => {
                                    return <p className="articleItem" key={art} title={art} data-article-list="target" onClick={this.handleArticleClick}>{art}</p>
                                })
                            }
                        </div>
                        <div className="refresh">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"  onClick={() => this.refreshArticles("target")}>
                                <path
                                    d="M500.33 0h-47.41a12 12 0 0 0-12 12.57l4 82.76A247.42 247.42 0 0 0 256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 0 0 166.18-63.91 12 12 0 0 0 .48-17.43l-34-34a12 12 0 0 0-16.38-.55A176 176 0 1 1 402.1 157.8l-101.53-4.87a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12h200.33a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12z"/>
                            </svg>
                        </div>
                    </div>
                </main>
                <button className="btn startBtn" onClick={this.printState}>START</button>
            </div>
        );
    }
}