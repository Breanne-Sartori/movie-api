const express = require('express');
const app = express();

let topMovies = [ 
    {
    title: ''
    },
    {
        title: ''
    },
    {
        title: ''
    }
];

app.get('/movies', (req, res) => {
    res.json(topMovies);
});

app.get('/', (req, res) => {
    res.send('Welcome to myFlix!');
});

app.use(express.static('public'));

app.listen(8080, () => {
    console.log('Your app is listening on port 8080.');
});