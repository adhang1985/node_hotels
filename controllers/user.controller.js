const User = require('../model/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const registration = async(req,res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password,10);
        const newUser = new User({
            username : req.body.username,
            password : hashedPassword
        });
        await newUser.save();
        res.status(201).json({message:'user is created',data:newUser,status:'success'});
    } catch (error) {
        res.status(500).json({message:'Server error'});
    }
   
};

const logging = async(req,res) => {
    try {
        const selUser = await User.find({username:req.body.username});
        if(selUser && selUser.length > 0){
            const isValidPassword = await bcrypt.compare(req.body.password,selUser[0].password);
            if(isValidPassword){
                // generate token
                const token = jwt.sign({
                    username : selUser[0].username,
                    userId : selUser[0]._id
                },process.env.JWT_SECRET,{
                    expiresIn:'1h'
                });
                res.status(200).json({message:'valid user',access_token:"Bearer "+token});
            }else{
                res.status(401).json({message:'Authentication failed!'});
            }
        }else{
            res.status(401).json({message:'Authentication failed!'});
        }
    } catch (error) {
        res.status(500).json({message:'Server error'});
    }
};

module.exports = {registration,logging};