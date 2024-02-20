const mongoose = require('mongoose');

const personSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    age : {
        type : Number
    },
    role : {
        type : String,
        enum : ['chef','waiter','manager'],
        required : true
    },
    mobileNum : {
        type: String
    },
    address : {
        type: String
    },
    email : {
        type : String,
        required : true,
        unique: true
    },
    salary : {
        type : Number,
        required : true
    }
});

const Person = mongoose.model('Person',personSchema);

module.exports = Person;