const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

const randomArticlesRouter = require('./routes/randomArticles');
const searchArticlesRouter = require('./routes/searchForArticles');
const getArticlePage = require('./routes/articlePage');
const getAllRedirects = require('./routes/redirects');

app.use('/ranArticle', randomArticlesRouter);
app.use('/searchArticle', searchArticlesRouter);
app.use('/wikiArticle', getArticlePage);
app.use('/getRedirects', getAllRedirects);

app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
});