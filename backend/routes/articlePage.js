const router = require('express').Router();
const baseUrl = 'https://de.wikipedia.org/wiki/';
const axios = require('axios');

router.route('/:article').get((req, res) => {
    let article = req.params.article.replace(' ', '_');
    let customUrl = encodeURI(baseUrl + article);

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
        res.send(htmlCode);
    }

});
module.exports = router;
