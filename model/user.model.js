const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    createdOn:{
        type:Date,
        default:Date.now()
    }
});

const user = new mongoose.model('userCredential',userSchema);

module.exports = user;