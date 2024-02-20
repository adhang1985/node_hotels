const express = require('express');
const app = express();

const Person = require('./model/person.model');
const personRouter = require('./routes/person.route');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req,res) => {
    res.send('Welcome to our server');
});
app.use('/persons',personRouter);
// resource error handling
app.use((req,res,next) => {
    res.status(404).json({
        message: 'route not found'
    })
})

// server error handling
app.use((err,req,res,next) => {
    res.status(500).json({
        message: 'route not found'
    })
})

module.exports = app;