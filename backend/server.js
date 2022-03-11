// importing the installed packages
const express = require('express');
const dotenv = require('dotenv');
const {chats} = require('./data/data');

// creating app variable with express();
const app = express();

// unlocking the functions of dotenv
dotenv.config();


app.get('/',(req,res)=>{
    res.send("API is running");
});

app.get('/api/chat',(req,res)=>{
    res.send(chats);
});

app.get('/api/chat/:id',(req,res)=>{
    // console.log(req.params.id);
    const singleChat = chats.find((chat)=>chat._id===req.params.id);
    res.send(singleChat);
});

// port details in env file is imported
const PORT = process.env.PORT || 5000

app.listen(PORT,console.log(`Server started on PORT ${PORT} : http://localhost:${PORT}/`));