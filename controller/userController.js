const path = require("path");
const { v4: uuidv4 } = require('uuid');
let users = require("../model/userModel");

// home route
const getHome = (req,res)=>{
    res.sendFile(path.join(__dirname + "/../public/index.html"))
};

// getUser route
const getUser = (req,res)=>{
    res.status(200).json({users})
};

// create user route
const createUser = (req,res)=>{
    const newUser = {
        id: uuidv4(),
        username: req.body.username,
        email: req.body.email
    };
    users.push(newUser);
    res.status(201).json({users})
};

// // create user route
const updateUser = (req,res)=>{
    const userid = req.params.id;
    const {username,email} = req.body;

    users.filter((user)=> user.id === userid).map((selecteduser)=>{
        selecteduser.username = username;
        selecteduser.email = email;
    });

   
    res.status(200).json(users)
};








module.exports = {getHome, getUser,createUser,updateUser};