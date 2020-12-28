const router = require('express').Router();
//const fetch = require('node-fetch');
const axios = require('axios');
const baseUrl = "https://de.wikipedia.org/w/api.php"
//const RateLimiter = require("limiter").RateLimiter;


router.route('/:searchTerm').get((req, res) => {
    let searchTerm = encodeURI(req.params.searchTerm.replace(' ', '_'));
    let params = {
        action: "opensearch",
        search: searchTerm,
        format: "json",
        limit: "6",
        namespace: "0",
        maxlag: "5"
    };
    let customUrl = baseUrl + "?";
    Object.keys(params).forEach((key) => {
        customUrl += "&" + key + "=" + params[key];
    });

    let requestConfig = {
        method: 'get',
        url: customUrl,
        headers: {
            'User-Agent': 'WikipediaRaceApp/0.1'
        }
    };
    axios(requestConfig)
        .then(apires => {
            res.json(apires.data[1])
        })
        .catch(err => console.log(err));
});



module.exports = router;