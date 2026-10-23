const express = require('express');
const scraper = require('./scraper')
const app = express();

//Home page
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

//nexThing player page: frames the YouTube embed from this origin
app.get('/player', (req, res) => {
    res.sendFile(__dirname + "/player.html");
});

//API route
app.get('/api/search', (req, res) => {
    scraper.youtube(req.query.q, req.query.key, req.query.pageToken)
        .then(x => res.json(x))
        .catch(e => res.send(e));
});

app.listen(process.env.PORT || 8080, function () {
  console.log('Listening on port 8080');
});

module.exports = app;
