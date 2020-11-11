const router = require('express').Router();
const baseUrl = 'https://de.wikipedia.org/wiki/';
const axios = require('axios');
/*const fs = require('fs');*/
const jsdom = require("jsdom");
const {JSDOM} = jsdom;

router.route('/:article').get((req, res) => {
    let article = req.params.article.replace(' ', '_');
    let customUrl = baseUrl + article;

    let requestConfig = {
        method: 'get',
        url: customUrl,
        headers: {
            'User-Agent': 'WikipediaRaceApp/0.1'
        }
    };
    axios(requestConfig)
        .then(apires => {
            editHtml(apires.data);
        })
        .catch(err => console.log(err));

    function editHtml(htmlCode) {
        /*console.log(htmlCode);*/
        let dom = new JSDOM(htmlCode);
        let contentContainer = dom.window.document.getElementById('content');
        let bodyWrapper = new JSDOM('<body id="bodyWrapper"> </body>');
        bodyWrapper.window.document.getElementById('bodyWrapper').appendChild(contentContainer);

        //document head
        let headTag = dom.window.document.getElementsByTagName('head')[0].outerHTML;
        let styleLinks = dom.window.document.querySelectorAll("link[rel=stylesheet]");
        let linkArr = [];
        for (let i = 0; i < Object.keys(styleLinks).length ; i++) {
            linkArr.push(styleLinks[i].outerHTML);
        }
        linkArr.map(link => {
            let domLink = new JSDOM(link);
            console.log(domLink.window.document);
        })
        res.send(bodyWrapper.window.document.getElementById('bodyWrapper').outerHTML);
    }
});


module.exports = router;