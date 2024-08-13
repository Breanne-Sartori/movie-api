const express = require('express'),
    morgan = require('morgan');

const app = express();

app.use(morgan('common'));

let topMovies = [ 
    {
        title: 'L.A Confidential',
        year: '1997'
    },
    {
        title: 'The Godfather',
        year: '1972'
    },
    {
        title: 'Casablanca',
        year: '1942'
    },
    {
        title: 'Seven Samurai',
        year: '1954'
    },
    {
        title: 'Parasite',
        year: '2019'
    },
    {
        title: 'Schindler\'s List',
        year: '1993'
    },
    {
        title: 'Toy Story',
        year: '1995'
    },
    {
        title: 'Chinatown',
        year: '1974'
    },
    {
        title: 'All About Eve',
        year: '1950'
    },
    {
        title: 'How to Train Your Dragon',
        year: '2010'
    }
];

app.get('/movies', (req, res) => {
    res.json(topMovies);
});

app.get('/', (req, res) => {
    res.send('Welcome to myFlix!');
});

app.use(express.static('public'));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(8080, () => {
    console.log('Your app is listening on port 8080.');
});