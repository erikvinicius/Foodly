const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

server.set('view engine', 'njk');

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
});

server.use(express.static('public'));

server.get('/', (req, res) => {
    return res.render('home');
});

server.get('/about', (req, res) => {
    return res.render('about');
});

server.get('/revenues', (req, res) => {
    return res.render('revenues');
});

server.use((req, res) => {
    return res.status(404).render("not-found");
});

server.listen(5000, () => {
    console.log('server listening connection in port 5000');
});