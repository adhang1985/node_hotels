const express = require('express');
const app = express();

const Person = require('./model/person.model');
const MenuItem = require('./model/menuItem.model');
const User = require('./model/user.model');

const personRouter = require('./routes/person.route');
const menuRouter = require('./routes/menuItem.routes');
const userRouter = require('./routes/user.routes');

const bodyParser = require('body-parser');
const checkLogin = require('./middleware/checkLogin');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// Middleware function
const logRequest = (req,res,next) => {
    console.log(`${new Date().toLocaleString()} Request made to : ${req.originalUrl}`);
    next();
}
app.use(logRequest);
app.get('/', (req,res) => {
    res.send('Welcome to our server');
});

app.use('/persons',personRouter);
app.use('/menu',checkLogin,menuRouter);
app.use('/user',userRouter);

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