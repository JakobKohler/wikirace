const router = require('express').Router();
const axios = require('axios');

router.route('/:article').get((req, res) => {
    let article = req.params.article;
    let customUrl = `https://de.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(decodeURIComponent(article))}&redirects&format=json&formatversion=2`;
    let requestConfig = {
        method: 'get',
        url: customUrl,
        headers: {
            'User-Agent': 'WikipediaRaceApp/0.1'
        }
    };
    axios(requestConfig)
        .then(apires => {
            let allRedirects = [];
            let redirectRes = apires.data.query['redirects'];
            if (redirectRes){
                redirectRes.forEach(redirectArticle => {
                    allRedirects.push(decodeURIComponent(redirectArticle['to']));
                })
            }
            res.send(allRedirects);
        })
        .catch(err => console.log(err));
});
module.exports = router;