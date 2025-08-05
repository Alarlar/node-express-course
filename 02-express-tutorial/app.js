const express = require('express');
const app = express();
let {people} = require('./data')

// static assets, to get the form data нужно использовать работающую программу для работы с данными
app.use(express.static('./methods-public'))
// parse form data - adding value to body
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())


app.get('/api/people', (req, res) => { // read the data
    res.status(200).json({ scusses: true, data: people})
})

app.post('/api/people', (req, res) => { // add data
    const {name} = req.body
    if(!name) {
        return res.status(400).json({ success: false, msg: 'please provide name value'})
    }
    res.status(201).json({success: true, person: name })
})

app.post('/login', (req, res) => {
    const {name} = req.body;
    if(name) {
        return res.status(200).send(`Welcome ${name}`)
    }

    res.status(401).send('Please provide credentials')
})

app.listen(5001, () => {
    console.log('Server is listening on port 5001')
})
