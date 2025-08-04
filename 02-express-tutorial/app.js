const express = require('express');
const app = express();

// req => middleware => res
// const logger = require('./logger')

const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time)
    // res.send('Testing') // Либо показывать тут что свое
    next() // либо дальше идти к методам, must be here
}

app.get('/', logger,  (req, res) => {
    res.send('Home')
})

app.get('/about', logger, (req, res) => {
    res.send('About')
})

app.listen(5001, () => {
    console.log('Server is listening on port 5001')
})