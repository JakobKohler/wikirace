const router = require('express').Router();
const baseUrl = 'https://de.wikipedia.org/wiki/';
const axios = require('axios');
const fs = require('fs');

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
            makeFile(apires.data)
        })
        .catch(err => console.log(err));
});

function makeFile(htmlCode) {
    fs.writeFile('tempHtmlFile.html', htmlCode, (err) => {
        if (err) throw err;
        console.log("createdFile");

    });
}

module.exports = router;