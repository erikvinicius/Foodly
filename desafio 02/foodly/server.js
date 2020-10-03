const express = require('express');
const nunjucks = require('nunjucks');
const data = require('./data');

const server = express();

server.set('view engine', 'njk');

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
});

server.use(express.static('public'));

server.get('/', (req, res) => {
    return res.render('home', { recipes: data });
});

server.get('/about', (req, res) => {
    return res.render('about');
});

server.get('/recipes', (req, res) => {
    return res.render('recipes', { recipes: data });
});

server.get("/recipes/:index", function (req, res) {
    const recipeIndex = req.params.index;
    const recipe = data[recipeIndex];
    if(recipe != null){
        return res.render('recipe', { recipe });
    }
    return res.status(404).render("not-found");
  })

server.use((req, res) => {
    return res.status(404).render("not-found");
});

server.listen(5000, () => {
    console.log('server listening connection in port 5000');
});