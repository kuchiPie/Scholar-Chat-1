const asyncHandler = require('express-async-handler');
const User = require('../models/userModel')
const generateToken = require('../config/generateToken');

// We need to handle the errors which come in our way, to do this we can use express-async-handler which does this work automatcally
const resisterUser=asyncHandler(async(req,res)=>{
    const {name,email,password,pic} = req.body;

    if(!name || !email || !password){
        res.status(400);
        throw new Error("Please enter all the fields");
    }

    const userExists = await User .findOne({email});

    if(userExists){
        res.status(400);
        throw new Error("User Alredy Exists");
    }

    const user = await User.create({
        name,email,password,pic, 
    });

    if(user){
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            pic:user.pic,
            token:generateToken(user._id),
        });
    }else{
        res.status(400);
        throw new Error("Failed to create a new User");
    }
});

const authUser = asyncHandler(async(req,res)=>{
    const {email,password} = req.body;

    const user = await User.findOne({email});
    if(user && (await user.matchPassword(password))){
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            pic:user.pic,
            token:generateToken(user._id),
        });
    }else{
        res.status(401);
        throw new Error("Invalid Email or Password");
    }
});

module.exports = {resisterUser,authUser};