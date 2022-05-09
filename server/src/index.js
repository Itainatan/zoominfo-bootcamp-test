const express = require('express');
const search = require('./search');
const getOptions = require('./option');

const app = express();

const verify = (req, res, next) => {
    next(req.headers.bootcamp === 'BC3' ? undefined : new Error('client not verified'));
};

/**
 * Task Server/4:
 * Fix me
 */
//const searchTerm =
//const queryFilter =

app.get('/api/wands/:term?', async (req, res) => {
    try {
        const searchTerm = req.params.term === undefined ? "all" : req.params.term;
        const queryFilter = req.query;
        console.log(searchTerm);
        console.log(queryFilter);
        const searchResult = await search(searchTerm, queryFilter);
        res.status(200);
        res.send(JSON.stringify(searchResult));

    } catch (error) {
        res.status(502);
        res.send(error);
    }
});

/**
 * Task Server/4:
 * Fix me
 */
//const optionsType = 
//optionsResult = 
app.get('/api/options/:type', async (req, res) => {
    try {
        const optionsType = req.params.type;
        optionsResult = await getOptions(optionsType);
        res.status(200);
        res.send(JSON.stringify(optionsResult));
    } catch (error) {
        res.status(502);
        res.send(error);
    }

});


app.listen(3000, '0.0.0.0', () => {
    console.log('Server is listening to http://0.0.0.0:3000/');
});
