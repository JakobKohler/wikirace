const router = require('express').Router();
const fetch = require('node-fetch');
const baseUrl = "https://de.wikipedia.org/w/api.php";

router.route('/:articleCount').get((req, res) => {
    let params = {
        action: "query",
        format: "json",
        list: "random",
        rnlimit: req.params.articleCount,
        rnnamespace: "0",
        rnfilterredir: "all"
    };
    let customUrl = baseUrl + "?origin=*";
    Object.keys(params).forEach((key) => {
        customUrl += "&" + key + "=" + params[key];
    });
    fetch(customUrl)
        .then(apires => apires.json())
        .then(body => res.json(body.query['random'].map(elem => elem.title)));
});

module.exports = router;
