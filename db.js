const mongoose = require('mongoose');
require('dotenv').config();

const mongoUrl = process.env.DB_URL;

// Setup mongodb connection
mongoose.connect(mongoUrl);

const db = mongoose.connection;

db.on('connected',() => {
    console.log('Connected to mongodb server'); 
});

db.on('error', () => {
    console.log('DB connection error');
});

db.on('disconnected', () => {
    console.log('Disconnected from mongodb server');
});

module.exports = db;