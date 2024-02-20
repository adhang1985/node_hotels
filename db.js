const mongoose = require('mongoose');

const mongoUrl = "mongodb+srv://adhangit:H7IE2rNJBnKMGAc0@cluster0.sexpzet.mongodb.net/hotelDB";

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