const router = require('express').Router();
const baseUrl = 'https://de.wikipedia.org/wiki/';
const axios = require('axios');

router.route('/:article').get((req, res) => {
    let article = req.params.article.replace(' ', '_');
    let customUrl = baseUrl + encodeURIComponent(decodeURIComponent(article));

    let requestConfig = {
        method: 'get',
        url: customUrl,
        headers: {
            'User-Agent': 'WikipediaRaceApp/0.1'
        }
    };
    axios(requestConfig)
        .then(apires => {
            res.send(apires.data);
        })
        .catch(err => res.send('<p>Hello</p>'));
});
module.exports = router;
